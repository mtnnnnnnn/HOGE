import BaseEditer from './BaseEditer';
export default class Eracer extends BaseEditer {
    index: number;
    isMouseDown: boolean;
    context: CanvasRenderingContext2D;
    offset: number;
    startX: number;
    startY: number;
    constructor(index: number);
    setHandler(): void;
    onDown: (e: MouseEvent) => void;
    onUp: (e: MouseEvent) => void;
    onMove: (e: MouseEvent) => void;
    removeHandler(): void;
}
