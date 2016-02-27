export default class FileUploader {
    index: number;
    constructor(index: number);
    upload(url: string): Promise.IThenable<string>;
}
