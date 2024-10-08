import { ScreenSpeed } from "../constants/contant.js";
import randNum from "../function/randNum.js";

export const Coin = (() => {
    const szOption = [50, 60, 70, 80];
    let x = 960;
    let y = 0;
    let width = 50;
    let height = 50;
    let id = 0;
    return {
        setX(value) {
            if (value) x = value;
        },
        hash() {
            const rand = randNum(0, szOption.length - 1);
            width = szOption[rand];
            height = szOption[rand];
            x += width;
            y = randNum(50, 500);
        },
        create() {
            this.hash();
            return {
                id: `coin-${id++}`,
                x,
                y,
                width,
                height,
                speedX: randNum(3, 9),
            };
        },
    };
})();
