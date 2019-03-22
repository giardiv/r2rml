import { observable, action, toJS, computed } from 'mobx'

import { UI_LEFT, UI_RIGHT } from "../constants/UIConstants";

class UIModel {
    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @observable leftAsideActive = false;
    @observable rightAsideActive = false;

    @action setAsideState(side, active) {
        if(side == UI_LEFT){ this.leftAsideActive = active};
        if(side == UI_RIGHT){ this.rightAsideActive = active};
    }

    getLeftState(){
        return this.leftAsideActive;
    }
    
    getState(side){
        if(side == UI_LEFT) return this.leftAsideActive;
        if(side == UI_RIGHT) return this.rightAsideActive;
    }
}

export default UIModel;