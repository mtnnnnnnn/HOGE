import Setting from '../Setting/Setting';
export default class CanvasImage {
    index: number;
    element: HTMLElement;
    image: HTMLImageElement;
    list: HTMLElement;
    canvas: HTMLCanvasElement;
    settings: Setting;
    constructor(index: number, url: string);
    createCanvas(url: string): void;
}
