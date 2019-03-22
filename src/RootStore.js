import InputFilesModel from './models/InputFilesModel'
import MappingsModel from './models/MappingsModel'
import UIModel from './models/UIModel';

const stores = {
    InputFilesStore: new InputFilesModel(),
    MappingsStore: new MappingsModel(),
    UIStore: new UIModel()
}


export default {
    ...stores
}
