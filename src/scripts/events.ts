import { GameEvents } from "heks";
import { KeyboardEvents } from "./keyboard";

export interface DropInEvents extends GameEvents, KeyboardEvents {
    endTurn: {}
}