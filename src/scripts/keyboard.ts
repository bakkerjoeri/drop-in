import arrayWithout from '@bakkerjoeri/array-without';
import { EventEmitter, GameState } from 'heks';
import { DropInEvents } from './events';

export interface KeyboardEvents {
    keyPressed: KeyboardEvent;
    keyDown: KeyboardEvent;
    keyUp: KeyboardEvent;
}

export interface KeyboardEvent {
    key: Key;
}

export type Key = string;

export default class Keyboard {
    private pressedKeys: Key[] = [];
    private activeKeys: Key[] = [];
    private releasedKeys: Key[] = [];
    private eventEmitter: EventEmitter<DropInEvents>

    constructor(eventEmitter: EventEmitter<DropInEvents>) {
        this.eventEmitter = eventEmitter;

        window.addEventListener('keydown', (event) => {
            const key = event.key.toLowerCase();

            if (!this.isKeyPressed(key) && !this.isKeyDown(key)) {
                this.pressedKeys = [...this.pressedKeys, key];
            }

            if (!this.isKeyDown(key)) {
                this.activeKeys = [...this.activeKeys, key];
            }
        });

        window.addEventListener('keyup', (event) => {
            const key = event.key.toLowerCase();

            if (this.isKeyDown(key)) {
                this.activeKeys = arrayWithout(this.activeKeys, key);
            }

            if (!this.isKeyReleased(key)) {
                this.releasedKeys = [...this.releasedKeys, key];
            }
        });

        window.addEventListener('blur', this.resetAllKeys.bind(this));

        this.eventEmitter.on('update', (state: GameState, {}): GameState => {
            this.pressedKeys.forEach((activeKey) => {
                state = this.eventEmitter.emit('keyPressed', state, { key: activeKey });
            });

            this.activeKeys.forEach((activeKey) => {
                state = this.eventEmitter.emit('keyDown', state, { key: activeKey });
            });

            this.releasedKeys.forEach((activeKey) => {
                state = this.eventEmitter.emit('keyUp', state, { key: activeKey });
            });

            return state;
        });

        this.eventEmitter.on('afterUpdate', (state: GameState): GameState => {
            this.resetPressedKeys();
            this.resetReleasedKeys();

            return state;
        });
    }

    private isKeyPressed(key: Key): boolean {
        return this.pressedKeys.includes(key);
    }

    private isKeyDown(key: Key): boolean {
        return this.activeKeys.includes(key);
    }

    private isKeyReleased(key: Key): boolean {
        return this.releasedKeys.includes(key);
    }

    private resetPressedKeys(): void {
        this.pressedKeys = [];
    }

    private resetActiveKeys(): void {
        this.activeKeys = [];
    }

    private resetReleasedKeys(): void {
        this.releasedKeys = [];
    }

    private resetAllKeys(): void {
        this.resetPressedKeys();
        this.resetActiveKeys();
        this.resetReleasedKeys();
    }
}