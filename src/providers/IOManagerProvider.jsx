import React from 'react'
import { inject } from 'mobx-react'
import IOManagerController from '../viewcontrollers/IOManagerController'
import InputFilesViewModel from '../viewmodels/InputFilesViewModel'
import RootStore from '../RootStore'

@inject(RootStore.type.INPUT_FILE_MODEL)
class IOManagerProvider extends React.Component {
    constructor(props) {
        super(props)
        const ifModel = props[RootStore.type.INPUT_FILE_MODEL]
        this.viewModel = new InputFilesViewModel(ifModel)
    }

    render() {
        return (
            <IOManagerController inputFiles={this.viewModel}/>
        )
    }
}

export default IOManagerProvider