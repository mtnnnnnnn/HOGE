import Eracer from './Eracer';
import Mover from './Mover';
import BaseEditer from './BaseEditer';
export default class Editer {
    canvas: HTMLCanvasElement;
    handler: BaseEditer;
    eracer: Eracer;
    mover: Mover;
    selecter: any;
    constructor(index: number);
    changeEditer(mode: string): void;
    removeHandler(): void;
}
export declare enum EditerMode {
    MOVE = 0,
    SELECT = 1,
    ERACE = 2,
}
