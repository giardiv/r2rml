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
}

const FileInputsStore = new FileInputsStore();
