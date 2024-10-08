import animate from "../../animate/main.js";
import { postUser } from "../../service/userService.js";
import Sound from "../../sound/sound.js";
import ModalOver from "../../ui_objects/modalOver.js";
import Score from "../score/score.js";
import User from "../user/user.js";

const Game = (() => {
    const state = {
        isPause: false,
        isEnd: false,
        level: 0,
    };
    const isPause = () => state.isPause;
    const isEnd = () => state.isEnd;
    const setIsEnd = (value) => (state.isEnd = value);
    const setIsPause = (value) => (state.isPause = value);
    const pause = () => {
        state.isPause = true;
    };
    const play = () => {
        state.isPause = false;
        requestAnimationFrame(animate);
    };
    const start = () => {
        // requestAnimationFrame(animate);
    };

    const addUser = () => {
        User.update();
        const name = User.getUser().name;
        const score = User.getUser().score;
        const dataUser = { name, score };
        postUser(dataUser);
    };
    const over = () => {
        state.isPause = true;
        state.isEnd = true;
        const sc = Score.getScore();
        Sound.gameOver();
        ModalOver.set({ title: "Game Over T_T", score: sc });
        ModalOver.show();
        addUser();
    };

    const win = () => {
        Sound.gameWin();
        ModalOver.set({ title: "You Win!!!", score: Score.getScore() });
        ModalOver.show();
        addUser();
    };

    return {
        over,
        start,
        pause,
        play,
        isPause,
        setIsPause,
        isEnd,
        setIsEnd,
        win,
    };
})();
export default Game;
