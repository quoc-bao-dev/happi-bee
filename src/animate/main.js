import Control from "../control/control.js";
import Game from "../game_objects/game/game.js";
import Slider from "../ui_objects/slider.js";
/**
 * update screen
 * in here, we handle logic to update screen when frame update 60fps
 */
const animate = () => {
    Slider.scroll();
    Control.main();
    if (!Game.isPause() && !Game.isEnd()) requestAnimationFrame(animate);
};

export default animate;
