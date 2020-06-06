import { EventEmitter } from 'heks';
import { DropInEvents } from './events';
export interface KeyboardEvents {
    keyPressed: KeyboardEvent;
    keyDown: KeyboardEvent;
    keyUp: KeyboardEvent;
}
export interface KeyboardEvent {
    key: Key;
}
export declare type Key = string;
export default class Keyboard {
    private pressedKeys;
    private activeKeys;
    private releasedKeys;
    private eventEmitter;
    constructor(eventEmitter: EventEmitter<DropInEvents>);
    private isKeyPressed;
    private isKeyDown;
    private isKeyReleased;
    private resetPressedKeys;
    private resetActiveKeys;
    private resetReleasedKeys;
    private resetAllKeys;
}
