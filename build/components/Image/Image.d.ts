export default class CanvasImage {
    index: number;
    element: HTMLElement;
    image: HTMLImageElement;
    list: HTMLElement;
    canvas: HTMLCanvasElement;
    constructor(index: number, url: string);
    createCanvas(url: string): void;
}
