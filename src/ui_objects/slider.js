const Slider = (() => {
    const imageUrls = [
        "./public/asset/img/slider/background.png",
        "./public/asset/img/slider/background.png",
    ];
    const imageElements = [];
    let curX = 0;
    let curW = 0;

    const intit = async () => {
        curX = 0;
        curW = 0;
        const container = document.getElementById("slider");
        for (let i = 0; i < imageUrls.length; i++) {
            const img = document.createElement("img");
            img.src = imageUrls[i];
            img.onload = await function () {
                img.classList += " absolute";
                img.style.left = `${curX}px`;
                curX += 1285;
                imageElements.push(img);
                container.appendChild(img);
                if (curW <= 0) {
                    curW = 1285;
                }
            };
        }

        const lsSlider = container.querySelectorAll("img");
        lsSlider.forEach((item) => {});
    };
    const scroll = () => {
        imageElements.forEach((img) => {
            let posX = parseInt(img.style.left);
            if (posX < -curW) {
                img.style.left = `${curW - 1}px`;
            } else {
                img.style.left = `${posX - 1}px`;
            }
        });
    };

    return { intit, scroll };
})();

export default Slider;
