export const keyboard = ({
    enterKey,
    spaceKey,
    upKey,
    downKey,
    wKey,
    sKey,
    spaceKeyUp,
    upKeyPress,
    downKeyPress,
    wKeyPress,
    sKeyPress,
}) => {
    document.addEventListener("keydown", (e) => {
        const keyboard = e.key;
        switch (keyboard) {
            case "Enter":
                enterKey();
                break;
            case " ":
                spaceKey();
                break;
            case "ArrowUp":
                upKey();
                break;
            case "ArrowDown":
                downKey();
                break;
            case "w":
                wKey();
                break;
            case "s":
                sKey();
                break;
            default:
                break;
        }
    });
    document.addEventListener("keyup", (e) => {
        const keyboard = e.key;
        switch (keyboard) {
            case " ":
                spaceKeyUp();
                break;

            default:
                break;
        }
    });
    document.addEventListener("keypress", (e) => {
        const keyboard = e.key;
        switch (keyboard) {
            case " ":
                break;
            // case "ArrowUp":
            //     upKeyPress();
            //     break;
            // case "ArrowDown":
            //     downKeyPress();
            //     break;
            // case "w":
            //     wKeyPress();
            //     break;
            // case "s":
            //     sKeyPress();
            //     break;

            default:
                break;
        }
    });
};
