import React from 'react';
import { observer } from 'mobx-react';

import ColumnsReaderView from '../views/ColumnsReaderView';

@observer
class ColumnsReaderController extends React.Component {
    constructor(props){
        super(props);
        
        this.disable = this.disable.bind(this);
    }

    disable(){
        this.props.UI.disableLeft();
    }

    render() {
        const { inputFiles, UI } = this.props;
        return (
            <ColumnsReaderView
                inputFiles={inputFiles.getInputFiles()} 
                isActive={UI.leftState()}

                disable={this.disable}
            />
        )
    }
}

export default ColumnsReaderController;