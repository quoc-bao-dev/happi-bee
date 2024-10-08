const trashNode = document.createElement("div");
const screenSelector = "#screen";
const browerSelector = "#browser";

export const scoreSelector = "#score";

export const getNode = (selector) =>
    document.querySelector(selector)
        ? document.querySelector(selector)
        : trashNode;

export const BrowserNode = getNode(browerSelector);

export const ScreenNode = {
    node: () => getNode(screenSelector),
};

export const ScreenRect = {
    width: () => getNode(screenSelector).getBoundingClientRect().width,
    height: () => getNode(screenSelector).getBoundingClientRect().height,
};
