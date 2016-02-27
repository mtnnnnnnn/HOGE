export default class Setting {
    index: number;
    url: string;
    element: HTMLElement;
    button: HTMLElement;
    callback: (data: any) => void;
    constructor(index: number, url: string);
    createElement(): void;
    setEvent(callback: (data: any) => void): void;
    getElement(): HTMLElement;
}
