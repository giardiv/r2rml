import React from 'react';

import { toJS } from 'mobx';
import ColumnsReaderView from '../views/ColumnsReaderView';

class ColumnsReaderController extends React.Component {
    render() {
        const { inputFiles } = this.props;
        return (
            <ColumnsReaderView
                inputFiles={inputFiles.getInputFiles()} 
                />
        )
    }
}

export default ColumnsReaderController;