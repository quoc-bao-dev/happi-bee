import Sound from "../sound/sound.js";
import { eventHandler } from "./function.js";
import { keyboard } from "./keyboard.js";
import { mouse } from "./mouse.js";

const enterKey = () => {};
const wKey = eventHandler.birdMoveUp;
const sKey = eventHandler.birdMoveDown;
const upKey = eventHandler.birdMoveUp;
const downKey = eventHandler.birdMoveDown;
const spaceKeyUp = eventHandler.birdSpeedNor;
const spaceKey = eventHandler.birdSpeedUp;
const upKeyPress = eventHandler.birdMoveUp;
const downKeyPress = eventHandler.birdMoveDown;
const wKeyPress = eventHandler.birdMoveUp;
const sKeyPress = eventHandler.birdMoveDown;
const spaceKeyPress = eventHandler.birdSpeedUp;

export const initEvent = () => {
    Sound.init();
    mouse();
    keyboard({
        enterKey,
        spaceKey,
        wKey,
        sKey,
        upKey,
        downKey,
        spaceKeyUp,
        upKeyPress,
        downKeyPress,
        wKeyPress,
        sKeyPress,
        spaceKeyPress,
    });
};
