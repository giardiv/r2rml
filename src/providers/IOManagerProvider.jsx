import React from 'react'
import { inject, observer } from 'mobx-react'
import IOManagerController from '../viewcontrollers/IOManagerController'
import InputFilesViewModel from '../viewmodels/InputFilesViewModel'

@inject( 'stores' )
@observer
class IOManagerProvider extends React.Component {
    constructor(props) {
        super(props)
        const InputFilesStore = props.stores.InputFilesStore
        this.inputFilesViewModel = new InputFilesViewModel(InputFilesStore)
    }

    render() {
        return (
            <IOManagerController inputFiles={this.inputFilesViewModel}/>
        )
    }
}

export default IOManagerProvider