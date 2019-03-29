import React from 'react';

import { faTimes, faSquareRootAlt, faFont, faAdjust, faClock, faCalendar, faCalendarMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { observer } from 'mobx-react';

@observer
class PeanutCreatorView extends React.Component {

    render() {
        return (
            <div class="row py-2">
                <div className="col-xs-12 search-section">
                    <div class="searcher d-none-peanut-filtered expanded">
                        <div className="d-none peanut-filter">
                            <div className="label">find a targetted property for</div>
                            <div className="value">NAME</div>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                        <input className="input" placeholder="Search for a columns or a class attribute" />
                        <div className="search-results">
                            <div class="item property">
                                <h5><span className="type">type</span>name</h5>
                                <div className="tag">schema:building</div>
                            </div>
                            <div class="item column">
                                <h5>name</h5>
                                <div className="tag">schema:building</div>
                            </div>
                        </div>
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