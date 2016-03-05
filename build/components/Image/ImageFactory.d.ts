import Image from './CanvasImage';
import ImageLoader from '../File/ImageLoader';
export default class ImageFactory {
    images: Image[];
    loaders: ImageLoader[];
    element: HTMLElement;
    constructor();
    create(url: string): void;
    remove(index: number): void;
    fetchElement(): void;
    getAllImage(): Image[];
    removeAll(): void;
    static instance: ImageFactory;
    static getInstance(): ImageFactory;
}
