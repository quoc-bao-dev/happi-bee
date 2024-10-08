import { PipeClass } from "../../class/Pipe.js";
import checkBirdBeat from "../../function/checkBirdBeat.js";
import manage from "../manage/manage.js";

const Planes = (() => {
    const base = manage();
    const variants = [
        "./public/asset/img/plane/plane-0.png",
        "./public/asset/img/plane/plane-1.png",
    ];

    return {
        ...base,
        render(data) {
            data.forEach((item) => {
                const index = item.index;
                const elm = new PipeClass(item);
                elm.setStyle("backgroundImage", `url(${variants[index]})`);
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
                }
            });
        },
    };
})();

export default Planes;
