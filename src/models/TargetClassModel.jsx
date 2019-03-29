import { observable, action, toJS } from 'mobx'
import uuid from 'uuid/v4'

class TargetClassModel {
    constructor(rootStore) {
        this.rootStore = rootStore
    }

    // Later, we will deal with more than one target class
    @observable targets = [];
    @observable properties = {};

    @action addTarget(target) {
        this.targets.push({
            id: uuid(),
            target: target
        })
    }

    @action addProperty(property) {
        this.properties[property.name] = property;
    }

    getTargets() {
        return this.targets;
    }

    getProperty(name) {
        return this.properties[name];
    }
}

export default TargetClassModel;