import React from 'react'
import { inject, observer } from 'mobx-react'
import PeanutCreatorController from '../viewcontrollers/PeanutCreatorController'

@inject( 'stores' )
@observer
class PeanutCreatorProvider extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <PeanutCreatorController/>
        )
    }
}

export default PeanutCreatorProvider