class InputFilesViewModel {
    constructor(fileInputStore) {
        this.store = fileInputStore
    }

    getFileInputs() {
        return this.store.getFileInputs()
    }

    addFileInput(fileInput) {
        this.store.addFileInput(fileInput)
    }

    removeFileInput(fileInput) {
        this.store.removeFileInput(fileInput)
    }
}

export default InputFilesViewModel