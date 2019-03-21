import InputFilesModel from './models/InputFilesModel'
import MappingsModel from './models/MappingsModel'

const stores = {
    InputFilesStore: new InputFilesModel(),
    MappingsStore: new MappingsModel()
}


export default {
    ...stores
}
