declare abstract class BaseEditer {
    canvas: HTMLCanvasElement;
    index: number;
    constructor(index: number);
    abstract setHandler(): void;
    abstract removeHandler(): void;
}
export default BaseEditer;
