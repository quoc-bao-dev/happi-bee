class BlockUI {
    constructor({ id }) {
        this.id = id;
        this.isMout = false;
        const block = document.createElement("div");
        block.id = id;
        this.mount = (parentNode) => {
            this.isMout = true;
            parentNode.appendChild(block);
        };
        this.unMount = (parentNode) => {
            if (this.isMout) {
                parentNode.removeChild(block);
                this.isMout = false;
            }
        };
        this.setAttr = (attr, value) => (block[attr] = value);
        this.setStyle = (attr, value) => (block.style[attr] = value);
        this.setInner = (child) => {
            block.innerHTML = child;
        };
        this.node = block;
        this.setClass = (className) => {
            block.className += ` ${className}`;
        };
    }
    setZIndex(index) {
        this.setStyle("z-index", index);
    }
}

export default BlockUI;
