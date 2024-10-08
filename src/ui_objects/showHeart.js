const showHeart = (hearts) => {
    const dom = document.querySelector("#hearts");
    const heart = `<div class="p-2 border-round bg-red-500 flex justify-content-center align-items-center text-white text-xl fadein animation-duration-500">
    <i class="fa-solid fa-heart"></i>
    </div>`;
    dom.innerHTML = "";
    for (let i = 0; i < hearts; i++) {
        dom.innerHTML += heart;
    }
};

export default showHeart;
