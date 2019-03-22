import React from 'react'
import { inject, observer } from 'mobx-react'
import InputFilesViewModel from '../viewmodels/InputFilesViewModel'
import UIViewModel from '../viewmodels/UIViewModel'
import ColumnsReaderController from '../viewcontrollers/ColumnsReaderController'

@inject( 'stores' )
@observer
class ColumnsReaderProvider extends React.Component {
    constructor(props) {
        super(props)
        const InputFilesStore = props.stores.InputFilesStore
        this.inputFilesViewModel = new InputFilesViewModel(InputFilesStore)

        const UIStore = props.stores.UIStore
        this.UIViewModel = new UIViewModel(UIStore)
    }

    render() {
        return (
            <ColumnsReaderController inputFiles={this.inputFilesViewModel} UI={this.UIViewModel}/>
        )
    }
}

export default ColumnsReaderProvider