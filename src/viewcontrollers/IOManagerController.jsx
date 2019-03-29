import React from 'react';

import IOManagerView from '../views/IOManagerView';
import { observer } from 'mobx-react';
import SchemaOrgReader from '../ontologyreaders/SchemaOrgReader';

const CSV_SEPARATOR = ",";

@observer
class IOManagerController extends React.Component {
    reader = null;

    constructor(props){
        super(props);
        this.state = {
            displayed: true,
            searchTarget: {
                piece: null,
                values: null
            }
        }

        this.handleFileChosen = this.handleFileChosen.bind(this);
        this.handleTargetSearch = this.handleTargetSearch.bind(this);
        this.cleanInput = this.cleanInput.bind(this);
        this.activeLeft = this.activeLeft.bind(this);
        this.selectTarget = this.selectTarget.bind(this);
    }

    componentDidMount() {
        this.reader = new SchemaOrgReader();
        this.reader.init();
    }
    

    handleFileChosen(e) {
        const _this = this;
        const file = e.target.files[0];
        if(file == null) return;
        const filereader = new window.FileReader();
        filereader.onloadend = (e) => {
            const content = e.target.result;

            // CSV only 

            const columns = content.split("\n")[0].split(CSV_SEPARATOR);
            if(columns.length == 0){
                console.error("No columns found in the CSV file");
                return;
            }

            const mappings = columns.map(function (column) {
                return { name: JSON.parse(column), type: "CSV column" };
            });

            _this.props.inputFiles.addInputFiles({
                name: file.name,
                ext: file.type,
                columns: mappings
            })
        }
        filereader.readAsText(file);
    }

    handleTargetSearch(e) {
        this.setState({
            searchTarget: {
                piece: e.target.value,
                values: this.reader.getClassByPiece(e.target.value)
            }
        })
    }

    activeLeft(e){
        console.log("bppù");
        this.props.UI.activeLeft();
    }

    cleanInput(){
        this.setState({searchTarget: {
            piece: null,
            values: null
        }})
    }
    
    selectTarget = targetName => e => {
        this.props.targetClass.addTargetClass(this.reader.getClass(targetName));
        this.cleanInput();
    }

    render() {
        const { inputFiles, targetClass, UI } = this.props;
        return (
            <IOManagerView 
                inputFiles={inputFiles.getInputFiles()}
                targetClass={targetClass.getClasses()}
                leftIsActive={UI.leftState()}
                searchTargets={this.state.searchTarget}

                handleFileChosen={this.handleFileChosen}
                handleTargetSearch={this.handleTargetSearch}
                selectTarget={this.selectTarget}

                cleanInput={this.cleanInput}
                activeLeft={this.activeLeft}
            />
        )
    }
}

export default IOManagerController;