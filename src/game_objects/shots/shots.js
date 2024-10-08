import { ShotClass } from "../../class/Shot.js";
import checkBirdBeat from "../../function/checkBirdBeat.js";
import { checkCollision } from "../../function/checkCollision.js";
import Sound from "../../sound/sound.js";
import Bird from "../bird/bird.js";
import manage from "../manage/manage.js";

const Shots = (() => {
    const base = manage();
    const variants = ["./public/asset/img/bullets/Absent-0.png"];
    return {
        ...base,
        logger() {
            console.log(base.list);
        },

        render(data) {
            data.forEach((item) => {
                const elm = new ShotClass(item);
                // elm.setStyle("backgroundColor", "#323504");
                elm.setStyle("backgroundImage", `url(${variants[0]})`);
                elm.setStyle("backgroundSize", "contain");
                elm.setStyle("backgroundRepeat", "no-repeat");
                base.mountElm(elm);
            });
        },
        move() {
            base.list.forEach((elm) => {
                elm.moveLeft();
                if (elm.x2 < 0) {
                    base.unMountElm(elm);
                }
                if (elm.x1 < 400) {
                    checkBirdBeat(elm);
                    if (checkCollision(elm.getXY(), Bird.getXY())) {
                        base.unMountElm(elm);
                        Sound.gong();
                    }
                }
            });
        },
    };
})();

export default Shots;
