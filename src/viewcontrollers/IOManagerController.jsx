import React from 'react';

import IOManagerView from '../views/IOManagerView';
import { toJS } from 'mobx';

class IOManagerController extends React.Component {
    state = {
        displayed: true
    }

    testHandler = () => {
        this.props.inputFiles.addInputFiles({
            name: "tester"
        })
    }
    
    render(){
        const { inputFiles } = this.props
        console.log(toJS(inputFiles));
        return(
            <IOManagerView inputFiles={inputFiles.getInputFiles()} testHandler={this.testHandler}/>
        )
    }

}

export default IOManagerController;