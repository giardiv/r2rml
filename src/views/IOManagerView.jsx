import React from 'react';

import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
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
        const { inputFiles, leftIsActive, handleFileChosen, activeLeft } = this.props;

        console.log(inputFiles);
        return (
            <div className={"top-inputs " + (leftIsActive ? " left-active" : "")}>
                <div className={ leftIsActive ? "container-fluid" : "container"}>
                    <div className="row py-2">
                        <div className="col-xs-12">
                            <label>{leftIsActive + " "} Input schemas <FontAwesomeIcon icon={faQuestionCircle} /></label>
                            {inputFiles.map((file) => <button className="outline-yellow" onClick={activeLeft}>{file.name}</button>)}
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