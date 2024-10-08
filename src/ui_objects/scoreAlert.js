const scoreAlert = (() => {
    const show = (score) => {
        const div = document.createElement("div");
        const dom = document.querySelector("#bird");

        div.innerHTML = `<div class="py-2 px-4 bg font-bold animation-duration-500 zoomin absolute  score-alert" >${score}</div>`;
        dom.appendChild(div);
        setTimeout(() => {
            dom.removeChild(div);
        }, 700);
    };
    return {
        show,
    };
})();

export default scoreAlert;
