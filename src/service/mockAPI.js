import { ScreenSpeed } from "../constants/contant.js";
import { ScreenRect } from "../constants/nodeElm.js";

export const mockAPI = [
    {
        id: "node-1",
        x: ScreenRect.width() + 10,
        y: 0,
        width: 20,
        height: 80,
        speedX: ScreenSpeed.moveLeft,
    },
    {
        id: "node-2",
        x: ScreenRect.width() + 40,
        y: 0,
        width: 20,
        height: 80,
        speedX: ScreenSpeed.moveLeft,
    },
    {
        id: "node-3",
        x: ScreenRect.width() + 70,
        y: 0,
        width: 20,
        height: 70,
        speedX: ScreenSpeed.moveLeft,
    },
    {
        id: "node-4",
        x: ScreenRect.width() + 100,
        y: 0,
        width: 20,
        height: 70,
        speedX: ScreenSpeed.moveLeft,
    },
    {
        id: "node-5",
        x: ScreenRect.width() + 190,
        y: ScreenRect.height - 50,
        width: 20,
        height: 50,
        speedX: ScreenSpeed.moveLeft,
    },
    {
        id: "node-6",
        x: ScreenRect.width() + 210,
        y: ScreenRect.height - 50,
        width: 20,
        height: 50,
        speedX: ScreenSpeed.moveLeft,
    },
    {
        id: "node-7",
        x: ScreenRect.width() + 240,
        y: ScreenRect.height - 50,
        width: 20,
        height: 50,
        speedX: ScreenSpeed.moveLeft,
    },
];
