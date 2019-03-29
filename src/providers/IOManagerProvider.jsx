import React from 'react'
import { inject, observer } from 'mobx-react'
import IOManagerController from '../viewcontrollers/IOManagerController'
import InputFilesViewModel from '../viewmodels/InputFilesViewModel'
import UIViewModel from '../viewmodels/UIViewModel';
import TargetClassViewModel from '../viewmodels/TargetClassViewModel';

@inject( 'stores' )
@observer
class IOManagerProvider extends React.Component {
    constructor(props) {
        super(props)
        
        const InputFilesStore = props.stores.InputFilesStore
        this.inputFilesViewModel = new InputFilesViewModel(InputFilesStore)
        
        const TargetClassStore = props.stores.TargetClassStore
        this.targetClassViewModel = new TargetClassViewModel(TargetClassStore)

        const UIStore = props.stores.UIStore
        this.UIViewModel = new UIViewModel(UIStore)
    }

    render() {
        return (
            <IOManagerController inputFiles={this.inputFilesViewModel} targetClass={this.targetClassViewModel} UI={this.UIViewModel}/>
        )
    }
}

export default IOManagerProvider