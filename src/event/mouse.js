import Game from "../game_objects/game/game.js";
import { Router } from "../routes/index.js";
import Sound from "../sound/sound.js";
import Menu from "../ui_objects/menu.js";
import { eventHandler } from "./function.js";

const setClick = (selector, callback) => {
    const btn = document.querySelector(selector);
    if (btn) {
        btn.onclick = callback;
    }
};

export const mouse = () => {
    const btns = document.querySelectorAll(".btn");
    btns.forEach((elm) =>
        elm.addEventListener("click", () => {
            Sound.click();
        })
    );
    setClick("#btn-start", () => {
        eventHandler.startGame();
    });

    setClick("#btn-pause", () => {
        if (!Game.isPause()) {
            Menu.show();
            Game.pause();
        } else {
            Game.play();
        }
    });

    setClick("#btn-back-home", () => {
        Router.nav("/");
    });
    setClick("#btn-show-top-user", () => {
        Router.nav("top-gamer");
    });
};
