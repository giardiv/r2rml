import React from 'react'
import { inject, observer } from 'mobx-react'
import InputFilesViewModel from '../viewmodels/InputFilesViewModel'
import ColumnsReaderController from '../viewcontrollers/ColumnsReaderController'

@inject( 'stores' )
@observer
class ColumnsReaderProvider extends React.Component {
    constructor(props) {
        super(props)
        const InputFilesStore = props.stores.InputFilesStore
        this.inputFilesViewModel = new InputFilesViewModel(InputFilesStore)
    }

    render() {
        return (
            <ColumnsReaderController inputFiles={this.inputFilesViewModel}/>
        )
    }
}

export default ColumnsReaderProvider