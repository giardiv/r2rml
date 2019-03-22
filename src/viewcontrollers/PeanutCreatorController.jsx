import React from 'react';

import IOManagerView from '../views/IOManagerView';
import { observer } from 'mobx-react';

@observer
class PeanutCreatorController extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <IOManagerView/>
        )
    }
}

export default PeanutCreatorController;