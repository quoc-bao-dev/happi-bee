const handleOutsideClick = (prarent, childClass, callback) => {
    console.log(prarent);
    prarent.addEventListener("click", (e) => {
        if (!e.target.closest(childClass)) {
            callback();
        }
    });
};

export default handleOutsideClick;
