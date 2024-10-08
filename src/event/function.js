import Control from "../control/control.js";
import Bird from "../game_objects/bird/bird.js";
import User from "../game_objects/user/user.js";
import { Router } from "../routes/index.js";

const pauseGame = () => {};
const startGame = () => {
    const userName = document.querySelector("#user-name-input").value;
    User.setUserName(userName);
    localStorage.setItem("name", userName);
    Router.nav("game");
    Control.start();
};
const birdJump = () => {
    Bird.jump();
};

const birdMoveUp = () => {
    Bird.moveUp();
    Bird.styleUp();
};
const birdMoveDown = () => {
    Bird.moveDown();
    Bird.styleDown();
};
const birdSpeedUp = () => {
    Bird.speedUp();
};
const birdSpeedNor = () => {
    Bird.speedNormal();
};
export const eventHandler = (() => {
    return {
        birdJump,
        pauseGame,
        startGame,
        birdMoveUp,
        birdMoveDown,
        birdSpeedUp,
        birdSpeedNor,
    };
})();
