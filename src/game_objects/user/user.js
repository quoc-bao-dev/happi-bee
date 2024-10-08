import Score from "../score/score.js";

const User = (() => {
    const state = {
        id: "",
        score: 0,
        userName: "",
    };
    const setUserName = (name) => {
        state.userName = name;
    };
    const setScore = (score) => {
        state.score = score;
    };
    const getUserName = () => {
        return state.userName;
    };

    const setUser = ({ id, name, score }) => {
        if (name) state.userName = name;
        if (score) state.score = score;
        if (id) state.id = id;
    };

    const update = () => {
        state.score = Score.getScore();
    };
    const getUser = () => {
        return {
            id: state.id,
            name: state.userName,
            score: state.score,
        };
    };

    const init = () => {
        const first = state.userName[0];
        document.querySelector("#avatar").innerHTML = first;
        document.querySelector("#user-name").innerHTML = state.userName;
    };
    return {
        init,
        setUserName,
        getUserName,
        setScore,
        setUser,
        update,
        getUser,
    };
})();

export default User;
