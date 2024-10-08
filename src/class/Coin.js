import { PipeClass } from "./Pipe.js";

export class CoinClass extends PipeClass {
    constructor({ id, x, y, width, height, speedX, score }) {
        super({ id, x, y, width, height, speedX });
        this.score = score;
        this.isEarned = false;
    }
    earned(parentNode) {
        // handle UI
        this.unMount(parentNode);
    }
}
