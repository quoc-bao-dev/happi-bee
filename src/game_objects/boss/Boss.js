import { BossClass } from "../../class/Boss.js";
import { ScreenNode } from "../../constants/nodeElm.js";
import randNum from "../../function/randNum.js";
import Shots from "../shots/shots.js";

const Boss = (() => {
    const counter = {
        frameUp: 0,
        frameDown: 0,
        frameBack: 0,
        frameForward: 0,
        frameStop: 0,
    };
    const state = {
        start: false,
        end: false,
        isUpdate: false,
        id: 0,
    };
    const variants = ["./public/asset/img/boss/boss-0.png"];
    const boss = new BossClass({
        id: "boss",
        x: 960,
        y: 560 / 2 - 100,
        height: 200,
        width: 200,
        speedX: 1,
        speedY: 1,
    });
    const caches = {
        x: 960,
        y: 560 / 2 - 100,
    };
    boss.setStyle("backgroundImage", `url(${variants[0]})`);
    // boss.setStyle("backgroundColor", "#323212");
    boss.setStyle("z-index", "212");
    boss.setStyle("backgroundSize", "contain");
    boss.setStyle("backgroundRepeat", "no-repeat");

    const boosGun = () => {
        const id = `shot-${state.id++}`;
        const shot = {
            id,
            ...boss.getPointGun(),
            width: 80,
            height: 20,
            speedX: randNum(3, 10),
        };
        Shots.render([shot]);
    };
    return {
        reset() {
            boss.setCoor("x1", caches.x);
            boss.setCoor("y1", caches.y);
        },
        setUp(val) {
            counter.frameUp = val;
        },
        setDown(val) {
            counter.frameDown = val;
        },
        setBack(val) {
            counter.frameBack = val;
        },
        setForward(val) {
            counter.frameForward = val;
        },
        setStop(val) {
            counter.frameStop = val;
        },
        move() {
            if (counter.frameUp > 0) {
                if (boss.y1 > -40) boss.moveUp();
                counter.frameUp--;
                if (counter.frameUp <= 0) {
                    state.isUpdate = true;
                }
            }
            if (counter.frameDown > 0) {
                if (boss.y2 < 700) boss.moveDown();
                counter.frameDown--;
                if (counter.frameDown <= 0) {
                    state.isUpdate = true;
                }
            }

            if (counter.frameBack > 0) {
                if (boss.x1 < 960) boss.moveRight();
                counter.frameBack--;
                if (counter.frameBack <= 0) {
                    state.isUpdate = true;
                }
            }
            if (counter.frameForward > 0 && boss.y2 < 560) {
                if (boss.x1 > 0) boss.moveLeft();
                counter.frameForward--;
                if (counter.frameForward <= 0) {
                    state.isUpdate = true;
                }
            }
            if (
                counter.frameBack == 0 &&
                counter.frameForward == 0 &&
                counter.frameUp == 0 &&
                counter.frameDown == 0 &&
                counter.frameStop > 0
            ) {
                counter.frameStop--;
            }
        },
        moveDone() {
            return (
                counter.frameBack == 0 &&
                counter.frameForward == 0 &&
                counter.frameUp == 0 &&
                counter.frameDown == 0 &&
                counter.frameStop == 0
            );
        },
        start() {
            state.start = true;
            boss.mount(ScreenNode.node());
        },
        end() {
            state.end = true;
        },
        gun() {
            boosGun();
        },
    };
})();

export default Boss;
