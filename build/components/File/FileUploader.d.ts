import { ConvertSetting } from './ConvertSetting';
export default class FileUploader {
    index: number;
    constructor(index: number);
    upload(setting: ConvertSetting): Promise.IThenable<string>;
}
