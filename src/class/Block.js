export class Block {
    /**
     *
     * @param {x1 ,x2 ,y1, y2} param0 this coordinate dependence Parent Node
     */
    constructor({ id, x, y, width, height }) {
        this.id = id;
        this.x1 = x;
        this.x2 = x + width;
        this.y1 = y;
        this.y2 = y + height;
        this.width = width;
        this.height = height;
        this.isMount = false;
        // privite actribute

        //initial style
        const block = document.querySelector(id)
            ? document.querySelector(id)
            : document.createElement("div");
        block.classList.add("absolute");
        block.id = this.id;

        const style = block.style;
        if (x) {
            style.left = x + "px";
        }
        if (y) {
            style.top = y + "px";
        }
        if (height) {
            style.height = height + "px";
        }
        if (width) {
            style.width = width + "px";
        }

        this.setStyle = (actr, value) => {
            style[actr] = value;
        };

        this.setAttr = (attr, value) => (block[attr] = value);

        this.node = () => block;

        this.updateCoordinates = (coordinate) => {
            /**
             * set coordinate by x1 or x2 or y1 or y2
             * @param coordinate = x1, x2, y1, y2
             */
            switch (coordinate) {
                case "x1":
                    this.x2 = this.x1 + this.width;
                    break;

                case "x2":
                    this.x1 = this.x2 - this.width;
                    break;
                case "y1":
                    this.y2 = this.y1 + this.height;
                    break;
                case "y2":
                    this.y1 = this.y2 - this.height;
                    break;
                default:
                    break;
            }
        };
        this.mount = (parentNode) => {
            this.isMount = true;
            parentNode.appendChild(block);
        };
        this.unMount = (parentNode) => {
            if (this.isMount) {
                parentNode.removeChild(block);
                this.isMount = false;
            }
        };
        this.setCoor = (coordinate, value) => {
            switch (coordinate) {
                case "x1":
                    this.x1 = value;
                    this.x2 = this.x1 + this.width;
                    this.setStyle("left", this.x1 + "px");
                    break;
                case "x2":
                    this.x2 = value;
                    this.x1 = this.x2 - this.width;
                    this.setStyle("left", this.x1 + "px");
                    break;
                case "y1":
                    this.y1 = value;
                    this.y2 = this.y1 + this.height;
                    this.setStyle("top", this.y1 + "px");
                    break;
                case "y2":
                    this.y2 = value;
                    this.y1 = this.y2 - this.height;
                    this.setStyle("top", this.y1 + "px");
                    break;

                default:
                    break;
            }
        };
    }
    getXY = () => {
        return {
            x1: this.x1,
            x2: this.x2,
            y1: this.y1,
            y2: this.y2,
        };
    };
}
