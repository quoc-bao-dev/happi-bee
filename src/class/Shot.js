import { Block } from "./Block.js";
export class ShotClass extends Block {
    constructor({ id, x, y, width, height, speedX }) {
        super({ id, x, y, width, height });
        this.speedX = speedX;
    }
    moveLeft() {
        this.x1 -= this.speedX;
        this.updateCoordinates("x1");
        this.setStyle("left", this.x1 + "px");
    }
}
