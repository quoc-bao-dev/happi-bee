import { ScreenNode } from "../../constants/nodeElm.js";
const manage = () => {
    const list = [];

    return {
        list,
        clear() {
            list.length = 0;
        },
        logger() {
            console.log(list);
        },
        mountElm(elm) {
            elm.mount(ScreenNode.node());
            list.push(elm);
        },
        unMountElm(elm) {
            elm.unMount(ScreenNode.node());
            for (let i = 0; i < list.length; i++) {
                if (list[i].id === elm.id) {
                    list.splice(i, 1);
                    break;
                }
            }
        },
    };
};

export default manage;
