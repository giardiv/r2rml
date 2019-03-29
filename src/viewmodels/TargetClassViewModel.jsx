class TargetClassViewModel {
    constructor(targetClassStore) {
        this.store = targetClassStore
    }

    getClasses() {
        return this.store.getTargets();
    }

    addTargetClass(target) {
        this.store.addTarget(target)
    }
}

export default TargetClassViewModel