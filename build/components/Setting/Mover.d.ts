import BaseEditer from './BaseEditer';
export default class Mover extends BaseEditer {
    index: number;
    isMouseDown: boolean;
    clickX: number;
    clickY: number;
    currentX: number;
    currentY: number;
    constructor(index: number);
    setHandler(): void;
    onDown: (e: MouseEvent) => void;
    onUp: (e: MouseEvent) => void;
    onMove: (e: MouseEvent) => void;
    removeHandler(): void;
}
