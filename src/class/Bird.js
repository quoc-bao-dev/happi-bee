import { BirdSpeed } from "../constants/contant.js";
import { Block } from "./Block.js";
export class BirdClass extends Block {
    constructor({ id, x, y, width, height, speedY, speedDown }) {
        super({ id, x, y, width, height });
        this.speedY = speedY;
        this.speedDown = speedDown;
        this.caches = {
            x,
            y,
        };
        this.reset = () => {
            this.setCoor("x1", caches.x);
            this.setCoor("y1", caches.y);
        };
    }

    setSpeedY(value) {
        this.speedY = value;
    }
    jump() {
        this.y1 -= this.speedY;
        this.updateCoordinates("y1");
        this.setStyle("top", this.y1 + "px");
    }

    down() {
        const speed = this.speedDown ? this.speedDown : BirdSpeed.down;
        this.y1 += speed;
        this.updateCoordinates("y1");
        this.setStyle("top", this.y1 + "px");
    }
    moveUp() {
        this.setCoor("y1", this.y1 - this.speedY);
    }
    moveDown() {
        this.setCoor("y1", this.y1 + this.speedY);
    }
}
