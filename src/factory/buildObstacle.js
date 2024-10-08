import { ScreenSpeed } from "../constants/contant.js";
import randNum from "../function/randNum.js";

export const House = (() => {
    const wOption = [80, 100, 120];
    const hOption = [150, 150, 200, 200, 250, 300, 350];
    let index = 0;
    let x = 960;
    let y = 0;
    let width = 50;
    let height = 200;
    let id = 0;
    return {
        setX(value) {
            if (value) x = value;
        },
        getX: () => x,
        hash() {
            y = 560 - height;
        },
        create() {
            this.hash();
            return {
                id: `house-${id++}`,
                x,
                y,
                width,
                height,
                speedX: ScreenSpeed.moveLeft,
            };
        },
        getWitdth() {
            return width;
        },
    };
})();

export const Plane = (() => {
    const wOption = [300, 200, 250];
    const hOption = [100, 120];
    let x = 960;
    let y = 0;
    let width = 50;
    let height = 200;
    let id = 0;
    return {
        setX(value) {
            if (value) x = value;
        },
        hash() {
            width = wOption[randNum(0, wOption.length - 1)];
            height = hOption[randNum(0, hOption.length - 1)];
            x += width;
            y = randNum(50, 100);
        },
        create() {
            this.hash();
            return {
                id: `plane-${id++}`,
                x,
                y,
                width,
                height,
                speedX: ScreenSpeed.moveLeft,
            };
        },
    };
})();
