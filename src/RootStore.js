import InputFilesModel from './models/InputFilesModel'
import MappingsModel from './models/MappingsModel'
import UIModel from './models/UIModel';
import TargetClassModel from './models/TargetClassModel'

const stores = {
    InputFilesStore: new InputFilesModel(),
    TargetClassStore: new TargetClassModel(),
    MappingsStore: new MappingsModel(),
    UIStore: new UIModel()
}


export default {
    ...stores
}
