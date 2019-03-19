import InputFilesModel from './models/InputFilesModel'

class RootStore {
    type = {
        INPUT_FILE_MODEL: 'input_file_model'
    };

    stores = [];
    
    constructor() {
        this.stores[this.INPUT_FILE_MODEL] = new InputFilesModel(this);
    }

    get(storeName){
        return this.stores[storeName];
    }
}

export default RootStore;
