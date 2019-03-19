class FileInputsStore {
    @observable fileInputs = [];

    @computed count() {
        return this.fileInputs.length;
    }

    addFile(file) {
        this.fileInputs.push({
            file: file
        });
    }

    getInputFiles(){
        return this.fileInputs;
    }
}

const FileInputsStore = new FileInputsStore();
