import BlockUI from "../class/Block.UI.js";
import { ScreenNode } from "../constants/nodeElm.js";
import Game from "../game_objects/game/game.js";
import { Router } from "../routes/index.js";
import Sound from "../sound/sound.js";

const Menu = (() => {
    const block = new BlockUI({ id: "menu" });
    block.setZIndex(999);
    block.setClass("modal");
    block.setStyle("position", "absolute");
    const parentNode = ScreenNode.node();

    const state = {
        title: `Title `,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Debitis, beatae.`,
    };

    const child = () => `
    <div
        class="absolute top-0 left-0 bottom-0 right-0 bg-black-alpha-40 flex justify-content-center align-items-center">
        <div class="alert-content p-5 bg-white shadow-1 border-round relative animation-delay-3000 zoomin">
            <div class="flex justify-content-end">
        </div>
        <div class="font-display text-center ">JS Game</div>
        <h1 class="text-center pt-2">Menu</h1>
                <div class="w-8 mx-auto mt-6">
                    <div class="flex w-full align-items-center mb-3">
                        <div class="w-4 flex gap-2 align-items-center text-3xl text-gray-700">
                            <i class="fa-solid fa-music"></i> <span class="pl-1 text-xl">Music</span>
                        </div>
                        <div class="w-7">
                            <input type="range" value= class="w-full border-0 outline-none" id='bg-volume'/>
                        </div>
                    </div>
                    <div class="flex w-full align-items-center mb-3">
                        <div class="w-4 flex gap-2 align-items-center text-3xl text-gray-700">
                            <i class="fa-solid fa-volume-high"></i>  <span class="text-xl">Sound</span>
                        </div>
                        <div class="w-7">
                            <input type="range" value= class="w-full border-0 outline-none" id='sys-volume'/>
                        </div>
                    </div>
                </div>
            <div class="pt-5">
                <div class="flex gap-3 w-fit mx-auto">
                    <div class="btn" id="restart-btn">Home</div>
                    <div class="btn" id="play-btn">Resume</div>
                </div>
            </div>
        </div>
    </div>`;
    block.setInner(child());

    const play = () => {
        Game.play();
        close();
    };
    const restart = () => {};
    const goHome = () => {
        Game.setIsEnd(false);
        Router.nav("/");
    };
    const inintShow = () => {
        const bgSound = Sound.getBgVolume() * 100;
        const efSound = Sound.getEffectVolume() * 100;

        document.querySelector("#bg-volume").value = bgSound;
        document.querySelector("#sys-volume").value = efSound;
    };
    const inintEvent = () => {
        // handleOutsideClick(block.node, ".alert-content", play);
        const btns = document.querySelectorAll(".btn");
        btns.forEach((elm) =>
            elm.addEventListener("click", () => {
                Sound.click();
            })
        );
        block.node.querySelector("#play-btn").onclick = play;
        block.node.querySelector("#restart-btn").onclick = goHome;

        //sound
        const ipBgVol = document.querySelector("#bg-volume");
        ipBgVol.addEventListener("change", (e) => {
            const volume = e.target.value / 100;
            Sound.setBackground(volume);
        });
        const ipSysVol = document.querySelector("#sys-volume");
        ipSysVol.addEventListener("change", (e) => {
            const volume = e.target.value / 100;
            Sound.setVolumeAll(volume);
        });
    };
    const close = () => {
        block.unMount(ScreenNode.node());
    };
    const show = () => {
        block.mount(ScreenNode.node());
        inintEvent();
        inintShow();
    };
    const set = ({ title, content }) => {
        if (title) state.title = title;
        if (content) state.content = content;
        block.setInner(child());
    };

    return {
        set,
        show,
        close,
    };
})();

export default Menu;
