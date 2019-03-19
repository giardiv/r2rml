import { observable, action } from 'mobx'
import uuid from 'uuid/v4'

class InputFilesModel {
    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @observable files = [];

    @action addFile(file) {
        this.files.push({
            id: uuid(),
            file: { file }
        })
    }

    getFiles() {
        return this.files;
    }
}

export default InputFilesModel;