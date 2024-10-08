import Bird from "../game_objects/bird/bird.js";
import Game from "../game_objects/game/game.js";
import Sound from "../sound/sound.js";
import showHeart from "../ui_objects/showHeart.js";
import { checkCollision } from "./checkCollision.js";

const checkBirdBeat = (elm) => {
    if (checkCollision(elm.getXY(), Bird.getXY()) && !Bird.isImmortal()) {
        Bird.decHeart();
        Sound.hit();
        showHeart(Bird.getHeart());
        if (Bird.isDie()) {
            Game.pause();
            Game.over();
        }
    }
};

export default checkBirdBeat;
