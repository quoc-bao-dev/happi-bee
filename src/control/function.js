import Boss from "../game_objects/boss/Boss.js";
import Coins from "../game_objects/coins/coins.js";
import Planes from "../game_objects/planes/planes.js";
import Walls from "../game_objects/walls/walls.js";
import Sound from "../sound/sound.js";
import { delay } from "../ui_objects/function/delay.js";
import Message from "../ui_objects/messge.js";
import Control from "./control.js";
import Trigger from "./trigger.js";

const handleScript = (script) => {
    if (script.triggers) {
        Trigger.subscribe(...script.triggers);
    }
    if (script.house) {
        Walls.render([script.house]);
    }
    if (script.coin) {
        Coins.render([{ ...script.coin, speedX: 3 }]);
    }
    if (script.plane) {
        Planes.render([{ ...script.plane }]);
    }
    if (script.coundown) {
        (async () => {
            const c = script.coundown;
            Control.setIsUpdateScript(false);
            Message.set({ title: c.title, content: c.message });
            await Message.countDown(c.timer);
            Control.setIsUpdateScript(true);
        })();
    }
    if (script.pause) {
        (async () => {
            Control.setIsUpdateScript(false);
            await delay(script.pause.time || 3000);
            Control.setIsUpdateScript(true);
        })();
    }
    if (script.boss) {
        const b = script.boss;
        if (b.up) Boss.setUp(b.up);
        if (b.down) Boss.setDown(b.down);
        if (b.left) Boss.setForward(b.left);
        if (b.right) Boss.setBack(b.right);
        if (b.stop) Boss.setStop(b.stop);

        if (b.gun) {
            Boss.gun();
            Sound.gun();
        }
        if (b.laund) Sound.bossLaund();
    }
};

export const listenScript = (script) => {
    if (script.boss) {
        Control.setIsUpdateScript(Boss.moveDone());
    }
};

export default handleScript;
