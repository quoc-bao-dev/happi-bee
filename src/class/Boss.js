import { Block } from "./Block.js";
export class BossClass extends Block {
    constructor({ id, x, y, width, height, speedY, speedX }) {
        super({ id, x, y, width, height });
        this.speedY = speedY;
        this.speedX = speedX;
    }
    setSpeedY(value) {
        this.speedY = value;
    }
    getPointGun() {
        const pos = {
            x: this.x1,
            y: Math.round(this.height / 2) + this.y1,
        };
        return pos;
    }

    moveLeft() {
        this.setCoor("x1", this.x1 - this.speedX);
    }
    moveRight() {
        this.setCoor("x1", this.x1 + this.speedX);
    }
    moveUp() {
        this.setCoor("y1", this.y1 - this.speedY);
    }
    moveDown() {
        this.setCoor("y1", this.y1 + this.speedY);
    }
}
