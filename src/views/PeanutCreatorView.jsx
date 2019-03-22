import React from 'react';

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { observer } from 'mobx-react';

@observer
class PeanutCreatorView extends React.Component {

    render() {
        return (
            <div class="row py-2">
                <div className="col-xs-12 search-section">
                    <div class="searcher peanut-filtered">
                        <div className="peanut-filter">
                            <div className="label">find a targetted property for</div>
                            <div className="value">NAME</div>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                        <input className="input" placeholder="Search for a columns or a class attribute" />
                    </div>
                    <div class="type-selector">
                        <label class="checkbox-container selected">columns only
                    <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container">attributes
                    <span class="checkmark"></span>
                        </label>
                        <label class="checkbox-container shared">attributes
                    <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default PeanutCreatorView