import { delay } from "./function/delay.js";
import BlockUI from "../class/Block.UI.js";
import { ScreenNode } from "../constants/nodeElm.js";

const Message = (() => {
    const block = new BlockUI({ id: "message" });
    block.setZIndex(999);
    block.setClass("modal");
    block.setStyle("position", "absolute");
    const parentNode = ScreenNode.node();
    const state = {
        title: `Title `,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Debitis, beatae.`,
        count: 0,
    };
    // ScreenNode.node()
    const child = () => `
    <div class="alert-content p-5 count-down-box border-round relative animation-delay-3000 zoomin">
        <h1 class="text-center">${state.title}</h1>
        <div class="flex justify-content-center align-items-center pt-3 pb-1">
            <div class="count-alert flex justify-content-center align-items-center bg-gray-100 " id='counter'>${state.count}</div>
        </div>
        <p class="pt-3 text-white text-center text-2xl line-height-2 px-4">${state.content}</p>
    </div>
    `;
    block.setInner(child());
    const inintEvent = () => {
        //dom here
    };
    const close = () => {
        block.unMount(ScreenNode.node());
    };
    const setCount = (count) => {
        block.node.querySelector("#counter").innerHTML = count;
    };
    const countDown = async (timer) => {
        setCount(timer);
        show();
        while (timer >= 0) {
            setCount(timer);
            timer--;
            await delay(1000);
        }
        close();
        return new Promise((res) => setTimeout(res, 1000));
    };
    const show = () => {
        block.mount(ScreenNode.node());
    };
    const set = ({ title, content }) => {
        if (title) state.title = title;
        if (content) state.content = content;
        block.setInner(child());
    };

    return {
        set,
        show,
        countDown,
    };
})();

export default Message;
