import { observable, action, toJS } from 'mobx'
import uuid from 'uuid/v4'

class InputFilesModel {
    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @observable files = [
        {
            name: "test"
        }
    ];

    @action addFileInput(file) {
        this.files.push({
            id: uuid(),
            name: file.name
        })
        console.log(toJS(this.getInputFiles()));
    }

    getInputFiles() {
        return this.files;
    }
}

export default InputFilesModel;