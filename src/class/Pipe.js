import { Block } from "./Block.js";
export class PipeClass extends Block {
    constructor({ id, x, y, width, height, speedX }) {
        super({ id, x, y, width, height });
        this.speedX = speedX;
    }
    getSpeed() {
        return this.speedX;
    }
    moveLeft() {
        this.x1 -= this.speedX;
        this.updateCoordinates("x1");
        this.setStyle("left", this.x1 + "px");
    }
    moveY(y) {
        this.setCoor("y1", this.y1 + y);
        this.setStyle("top", this.y1 + "px");
    }
    scaleHeight(level) {
        this.height *= level;
        this.setStyle("height", this.height + "px");
        this.updateCoordinates("y1");
    }
    scaleWidth(level) {
        this.width *= level;
        this.setStyle("width", this.width + "px");
        this.updateCoordinates("x1");
    }
}
