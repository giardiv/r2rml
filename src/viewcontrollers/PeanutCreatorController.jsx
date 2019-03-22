import React from 'react';

import PeanutCreatorView from '../views/PeanutCreatorView'
import { observer } from 'mobx-react';

@observer
class PeanutCreatorController extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <PeanutCreatorView/>
        )
    }
}

export default PeanutCreatorController;