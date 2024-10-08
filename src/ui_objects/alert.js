import BlockUI from "../class/Block.UI.js";
import { ScreenNode } from "../constants/nodeElm.js";
import handleOutsideClick from "./function/handleClickOutSide.js";

const Alert = (() => {
    const block = new BlockUI({ id: "alert" });
    const parentNode = document.querySelector("body");
    const state = {
        title: `Title `,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Debitis, beatae.`,
    };
    // ScreenNode.node()
    const child = () => `
    <div class="alert-content p-5 bg-white shadow-1 border-round relative animation-delay-3000 zoomin">
        <div class="flex justify-content-end">
            <span class="p-2" id="close-alert-btn">
            <i class="fa-solid fa-x"></i>
            </span>
        </div>
        <h1 class="text-center">${state.title}</h1>
        <p class="pt-3 text-gray-500 line-height-3 px-4">${state.content}</p>
    </div>`;
    block.setInner(child());
    const inintEvent = () => {
        handleOutsideClick(block.node.querySelector(".alert-content"), () => {
            close();
        });
        block.node
            .querySelector("#close-alert-btn")
            .addEventListener("click", () => {
                close();
            });
    };
    const close = () => {
        block.unMount(parentNode);
    };
    const show = () => {
        block.mount(parentNode);
        inintEvent();
    };
    const set = ({ title, content }) => {
        if (title) state.title = title;
        if (content) state.content = content;
        console.log(state);
        block.setInner(child());
    };

    return {
        set,
        show,
        close,
    };
})();

export default Alert;
