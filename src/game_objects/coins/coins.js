import { CoinClass } from "../../class/Coin.js";
import { checkCollision } from "../../function/checkCollision.js";
import randNum from "../../function/randNum.js";
import Sound from "../../sound/sound.js";
import scoreAlert from "../../ui_objects/scoreAlert.js";
import Bird from "../bird/bird.js";
import manage from "../manage/manage.js";
import Score from "../score/score.js";

const Coins = (() => {
    const base = manage();
    const variants = [
        "./public/asset/img/coin/coin-1.png",
        "./public/asset/img/coin/l-0.png",
        "./public/asset/img/coin/l-1.png",
        "./public/asset/img/coin/l-2.png",
        "./public/asset/img/coin/l-3.png",
    ];
    return {
        ...base,
        render(data) {
            data.forEach((item) => {
                const index = item.index;
                console.log();
                const elm = new CoinClass(item);
                // elm.setStyle("backgroundColor", "#fbbc07");
                elm.setStyle("backgroundImage", `url(${variants[index]})`);
                elm.setStyle("backgroundSize", "contain");
                elm.setStyle("backgroundRepeat", "no-repeat");
                base.mountElm(elm);
            });
        },
        move() {
            base.list.forEach((elm) => {
                if (elm.x2 < 0) {
                    base.unMountElm(elm);
                }
                if (checkCollision(elm.getXY(), Bird.getXY())) {
                    const sc = elm.score || randNum(-10000, 15000);
                    base.unMountElm(elm);
                    Score.plus(sc);
                    scoreAlert.show(sc);
                    Sound.earn();
                }
            });
            base.list.forEach((elm) => {
                elm.moveLeft();
            });
        },
    };
})();

export default Coins;
