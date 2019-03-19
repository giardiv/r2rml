import React from 'react';

import IOManagerView from '../views/IOManagerView';

class IOManagerController extends React.Component {
    state = {
        displayed: true
    }
    
    render(){
        const { inputFiles } = this.props
    
        return(
            <IOManagerController inputFiles={inputFiles.getInputFiles()} />
        )
    }

}

export default IOManagerController;