class InputFilesViewModel {
    constructor(fileInputStore) {
        this.store = fileInputStore
    }

    getInputFiles() {
        return this.store.getInputFiles()
    }

    addInputFiles(fileInput) {
        this.store.addFileInput(fileInput)
    }

    removeFileInput(fileInput) {
        this.store.removeFileInput(fileInput)
    }
}

export default InputFilesViewModel