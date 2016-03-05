import Setting from '../Setting/Setting';
export default class CanvasImage {
    index: number;
    name: string;
    url: string;
    element: HTMLElement;
    image: HTMLImageElement;
    list: HTMLElement;
    canvas: HTMLCanvasElement;
    canvasWrapper: HTMLElement;
    context: CanvasRenderingContext2D;
    settings: Setting;
    constructor(index: number, url: string);
    createCanvas(): void;
    reloadCanvas(): void;
    setCanvasSize(width: number, height: number): void;
    createListView(index: number, url: string): void;
}
