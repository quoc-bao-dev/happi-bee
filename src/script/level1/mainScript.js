import { scriptLv1 } from './level1.js';
import { scriptBoss } from './levelBoss.js';

export const mainScript = [
    {
        triggers: ['birdMove'],
    },
    {
        triggers: ['wallMove', 'planeMove', 'coinMove', 'scoreSub'],
    },
    ...scriptLv1,
    {
        distant: 1200,
    },

    {
        triggers: ['wallUnSub', 'coinUnSub', 'planeUnSub'],
    },
    {
        triggers: ['bossStart', 'shotMove'],
    },
    //BOSS
    ...scriptBoss,
    {
        triggers: ['bossUbSub', 'shotUnSub'],
    },
];
