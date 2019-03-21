import React from 'react';

import IOManagerView from '../views/IOManagerView';
import { toJS } from 'mobx';

const CSV_SEPARATOR = ",";

class IOManagerController extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayed: true
        }

        this.handleFileChosen = this.handleFileChosen.bind(this);
    }

    handleFileChosen(e) {
        const _this = this;
        const file = e.target.files[0];
        if(file == null) return;
        const filereader = new window.FileReader();
        filereader.onloadend = (e) => {
            const content = e.target.result;
            const columns = content.split("\n")[0].split(CSV_SEPARATOR);
            if(columns.length == 0){
                console.error("No columns found in the CSV file");
                return;
            }

            const mappings = columns.map(function (column) {
                return { name: column, type: null };
            });

            _this.props.inputFiles.addInputFiles({
                name: file.name,
                columns: mappings
            })
        }
        filereader.readAsText(file);
    }

    render() {
        const { inputFiles } = this.props
        console.log(toJS(inputFiles));
        return (
            <IOManagerView 
                inputFiles={inputFiles.getInputFiles()} 

                handleFileChosen={this.handleFileChosen}
                
                />
        )
    }
}

export default IOManagerController;