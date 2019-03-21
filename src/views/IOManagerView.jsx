import React from 'react';

import { faQuestionCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react';

@observer
class IOManagerView extends React.Component {
    constructor(props){
        super(props);

        this.openFileBrowser = this.openFileBrowser.bind(this);
    }


    openFileBrowser(e){
        const input = this.fileInput;
        input.click();
    }

    render() {
        const { inputFiles, handleFileChosen, openFileBrowser, testHandler } = this.props;

        return (
            <div className="top-inputs">
                <div className="container">
                    <div class="row py-2">
                        <div class="col-xs-12">
                            <label>Input schemas <FontAwesomeIcon icon={faQuestionCircle} /></label>
                            {inputFiles.map((file) => <button class="outline-yellow">{file.name}</button>)}
                            {inputFiles.length == 0 &&
                                <div onClick={this.openFileBrowser}>
                                    <button className="full-purple">Import CSV file</button>
                                    <input ref={input => this.fileInput = input} type="file" onChange={handleFileChosen} className="d-none" />
                                </div>
                            }
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
                                <button className="full-purple" onClick={testHandler}>import OWL file</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IOManagerView;