import { EventEmitter } from 'events';
import Editer, { EditerMode } from './Editer';
export default class Setting extends EventEmitter {
    index: number;
    url: string;
    element: HTMLElement;
    reload: HTMLElement;
    size: HTMLInputElement;
    callback: (data: any) => void;
    width: number;
    height: number;
    isAlpha: boolean;
    editer: Editer;
    editerMode: EditerMode;
    editerButton: HTMLInputElement;
    constructor(index: number, url: string);
    setDefaultSize(width: number, height: number): void;
    createElement(): void;
    createCanvasEditer(): void;
    changeEditerHandler: (e: UIEvent) => void;
    createAlphaButton(): void;
    createCanvasSize(): void;
    reloadCanvasSize(width: number, height: number): void;
    createSizeSelecter(): void;
    createReloadButton(): void;
    getElement(): HTMLElement;
}
