import React from 'react';

import { faQuestionCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class IOManagerView extends React.Component {

    render() {
        const { inputFiles } = this.props;

        return (
            <div className="top-inputs">
                <div className="container">
                    <div class="row py-2">
                        <div class="col-xs-12">
                            <label>Input schemas <FontAwesomeIcon icon={faQuestionCircle} /></label>
                            {inputFiles.map( (file) =>  <button class="outline-yellow">{file.name}</button>)}
                            <button class="outline-yellow"></button>
                            <label>Output schemas <FontAwesomeIcon icon={faQuestionCircle} /></label>
                            <div className="schema-select">
                                <div className="search-group">
                                    <div className="select-wrapper">
                                        <select>
                                            <option value="foaf">foaf</option>
                                        </select>
                                    </div>
                                    <input type="text" placeholder="select-targetted classes" />
                                </div>
                                <div className="purple middle-label">or</div>
                                <button className="full-purple">import OWL file</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IOManagerView;