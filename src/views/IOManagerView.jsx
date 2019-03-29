import React from 'react';

import { faQuestionCircle, faAngleLeft, faExternalLinkSquareAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
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
        const { 
            inputFiles, 
            targetClass,
            leftIsActive, 
            searchTargets, 
            
            handleFileChosen, 
            handleTargetSearch, 
            selectTarget, 
            
            cleanInput, 
            activeLeft 
        } = this.props;

        const searchTargetsView = searchTargets.values == null ? "" : searchTargets.values.map(function (target) {
            if(target == null){
                return(
                    <div className="no-result">No results</div>
                )
            }
            return(
                <div className="item" key={target.name} onClick={selectTarget(target.name)}>
                    <h5 dangerouslySetInnerHTML={{__html: target.name.replace(new RegExp('(^|)(' + searchTargets.piece + ')(|$)','ig'), '$1<b>$2</b>$3')}}></h5>
                    <a href={target.id} target="_blank"><FontAwesomeIcon icon={faExternalLinkSquareAlt} /></a>
                    {target.subClassOf[0].slice(0).reverse().map((subClassOf, i) => {
                        let arrow = i == 0 ? "" : <FontAwesomeIcon icon={faAngleLeft} />;
                        return(
                            <>
                                {arrow}
                                <div className="tag">{subClassOf}</div>
                            </>
                        )
                    })}
                </div>
            );
        })

        const temp = targetClass.map((target) => console.log(target))

        return (
            <div className={"top-inputs " + (leftIsActive ? " left-active" : "")}>
                <div className={ leftIsActive ? "container-fluid" : "container"}>
                    <div className="row py-2">
                        <div className="col-xs-12">
                            <label>Input schemas <FontAwesomeIcon icon={faQuestionCircle} /></label>
                            {inputFiles.map((file) => <button className="outline-yellow" onClick={activeLeft}>{file.name}</button>)}
                            {inputFiles.length == 0 &&
                                <div>
                                    <button className="full-purple" onClick={this.openFileBrowser}>Import CSV file</button>
                                    <input ref={input => this.fileInput = input} type="file" onChange={handleFileChosen} className="d-none" />
                                </div>
                            }
                            <label>Output schemas <FontAwesomeIcon icon={faQuestionCircle} /></label>
                            {targetClass.map((target) => <button className="outline-purple">{target.target.name}</button>)}
                            {targetClass.length == 0 && 
                                <div className="schema-select">
                                    <div className={"search-group" + (searchTargets.values !== null ? " expanded" : "")}>
                                        <div className="select-wrapper">
                                            <select>
                                                <option value="schema">schema.org</option>
                                            </select>
                                        </div>
                                        <input type="text" placeholder="select-targetted classes" onChange={handleTargetSearch} value={searchTargets.piece} />
                                        <FontAwesomeIcon icon={faTimes} className={"cleaner" + (searchTargets.values !== null ? "" : " d-none")} onClick={cleanInput} />
                                        <div className="search-result">
                                            {searchTargetsView}
                                        </div>
                                    </div>
                                    <div className="purple middle-label">or</div>
                                    <button className="full-purple">import OWL file</button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IOManagerView;