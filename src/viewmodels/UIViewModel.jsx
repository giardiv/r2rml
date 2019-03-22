import { UI_LEFT, UI_RIGHT } from "../constants/UIConstants";

class UIViewModel {
    constructor(UIStore) {
        this.store = UIStore
    }

    activeLeft() {
        return this.store.setAsideState(UI_LEFT, true)
    }
    activeRight() {
        return this.store.setAsideState(UI_RIGHT, true)
    }
    disableLeft() {
        return this.store.setAsideState(UI_LEFT, false)
    }
    disableRight() {
        return this.store.setAsideState(UI_RIGHT, false)
    }

    leftState() {
        return this.store.getState(UI_LEFT);
    }
    rightState() {
        return this.store.getState(UI_RIGHT);
    }
}

export default UIViewModel