import Bird from "../game_objects/bird/bird.js";
import Boss from "../game_objects/boss/Boss.js";
import Coins from "../game_objects/coins/coins.js";
import Planes from "../game_objects/planes/planes.js";
import Score from "../game_objects/score/score.js";
import Shots from "../game_objects/shots/shots.js";
import Walls from "../game_objects/walls/walls.js";
import Sound from "../sound/sound.js";
import Message from "../ui_objects/messge.js";
import Control from "./control.js";

const increaSc = (() => {
    let count = 0;
    return () => {
        count++;
        if (count == 20) {
            count = 0;
            Score.increa();
        }
    };
})();

const Trigger = (() => {
    const subscribers = [];
    const triggerMenu = {
        birdMove() {
            Control.subscribe(Bird.move);
        },
        introGame() {
            Message.countDown(3);
        },
        introSound() {
            Sound.countDown();
        },
        renderWall() {
            Walls.render([Control.getCurScript().house]);
        },
        wallMove() {
            Control.subscribe(Walls.move);
        },
        planeMove() {
            Control.subscribe(Planes.move);
        },
        coinMove() {
            Control.subscribe(Coins.move);
        },
        wallUnSub() {
            Control.unSubscibe(Walls.move);
        },
        coinUnSub() {
            Control.unSubscibe(Coins.move);
        },
        planeUnSub() {
            Control.unSubscibe(Planes.move);
        },
        bossStart() {
            Control.subscribe(Boss.move);
            Boss.start();
        },
        shotMove() {
            Control.subscribe(Shots.move);
        },
        bossUbSub() {
            Control.unSubscibe(Boss.move);
        },
        shotUnSub() {
            Control.unSubscibe(Shots.move);
        },
        scoreSub() {
            Control.subscribe(increaSc);
        },
        scoreUnSub() {
            Control.unSubscibe(increaSc);
        },
    };

    const subscribe = (...list) => {
        subscribers.push(...list);
        Control.setTrigger(true);
    };

    const run = () => {
        subscribers.forEach((cbKey) => {
            triggerMenu[cbKey]();
        });
        subscribers.length = 0;
    };
    return {
        subscribe,
        run,
    };
})();

export default Trigger;
