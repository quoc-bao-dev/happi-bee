import BlockUI from "../class/Block.UI.js";

const Sound = (() => {
    const block = new BlockUI("sound");

    const sound1 = `
    <audio id="sound-earn-coin">
        <source src="./public/asset/sound/earn-coin.wav" type="audio/mpeg">
    </audio>
    `;

    const sound2 = `
    <audio id="sound-hit-to-wall">
        <source src="./public/asset/sound/hit-to-wall.wav" type="audio/mpeg">
    </audio>
    `;

    const sound3 = `
    <audio id="sound-boss-gun">
        <source src="./public/asset/sound/boss-gun.mp3" type="audio/mpeg">
    </audio>
    `;
    const sound4 = `
    <audio id="sound-boss-laund">
        <source src="./public/asset/sound/boss-laund.mp3" type="audio/mpeg">
    </audio>
    `;

    const sound5 = `
    <audio id="sound-bell">
        <source src="./public/asset/sound/bell.mp3" type="audio/mpeg">
    </audio>
    `;

    const sound6 = `
    <audio id="sound-gong">
        <source src="./public/asset/sound/gong.mp3" type="audio/mpeg">
    </audio>
    `;

    const sound7 = `
    <audio id="sound-mouse-click">
        <source src="./public/asset/sound/mouse-click.mp3" type="audio/mpeg">
    </audio>
    `;

    const sound8 = `
    <audio id="sound-game-over">
        <source src="./public/asset/sound/game-over.wav" type="audio/mpeg">
    </audio>
    `;

    const sound9 = `
    <audio id="sound-win-game">
        <source src="./public/asset/sound/win-game.wav" type="audio/mpeg">
    </audio>
    `;

    const sound10 = `
    <audio id="sound-count-down">
        <source src="./public/asset/sound/count-down.mp3" type="audio/mpeg">
    </audio>
    `;

    const sound11 = `
    <audio id="bg-sound-background">
        <source src="./public/asset/sound/background.mp3" loop type="audio/mpeg">
    </audio>
    `;

    const combineSound = `${sound1} ${sound2} ${sound3} ${sound4}  ${sound5} ${sound6} ${sound7} ${sound8} ${sound9} ${sound10} ${sound11}`;

    const init = () => {
        const root = document.querySelector("#root");
        block.setInner(combineSound);
        block.mount(root);
    };
    const playSn = (selt) => {
        const sound = document.querySelector(selt);
        sound.currentTime = 0;
        sound.play();
    };
    const pauseSn = (selt) => {
        const sound = document.querySelector(selt);
        sound.pause();
    };
    const earn = () => {
        playSn("#sound-earn-coin");
    };
    const hit = () => {
        playSn("#sound-hit-to-wall");
    };
    const gun = () => {
        pauseSn("#sound-boss-gun");
        playSn("#sound-boss-gun");
    };
    const bossLaund = () => {
        playSn("#sound-boss-laund");
    };

    const bell = () => {
        playSn("#sound-bell");
    };

    const gong = () => {
        playSn("#sound-gong");
    };

    const click = () => {
        pauseSn("#sound-mouse-click");
        playSn("#sound-mouse-click");
    };

    const gameOver = () => {
        playSn("#sound-game-over");
    };

    const gameWin = () => {
        playSn("#sound-win-game");
    };

    const countDown = () => {
        playSn("#sound-count-down");
    };
    const background = () => {
        playSn("#bg-sound-background");
        document.querySelector("#bg-sound-background").volume = 0.3;
        document.querySelector("#bg-sound-background").playbackRate = 1.7;
    };
    const setBackground = (value) => {
        document.querySelector("#bg-sound-background").volume = value;
    };
    const setVolumeAll = (value) => {
        const elements = document.querySelectorAll('[id^="sound"]');
        if (elements.length > 0)
            elements.forEach((item) => {
                item.volume = value;
            });
    };
    const getBgVolume = () =>
        document.querySelector("#bg-sound-background").volume;
    const getEffectVolume = () =>
        document.querySelector("#sound-mouse-click").volume;

    return {
        init,
        earn,
        hit,
        bossLaund,
        bell,
        gong,
        gun,
        click,
        gameOver,
        gameWin,
        countDown,
        background,
        setBackground,
        setVolumeAll,
        getBgVolume,
        getEffectVolume,
    };
})();

export default Sound;
