const randNum = (x1, x2) => {
    const randomNumber = Math.floor(Math.random() * (x2 - x1 + 1)) + x1;
    return randomNumber;
};

export default randNum;
