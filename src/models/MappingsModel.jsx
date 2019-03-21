import { observable, action, toJS } from 'mobx'

class MappingsModel {
    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @observable mappings = [];

    @action addMappings(mappingsArray) {
        this.mappings.push(mappingsArray)
        console.log(toJS(this.getMappings()));
    }

    getMappings() {
        return this.mappings;
    }
}

export default MappingsModel;