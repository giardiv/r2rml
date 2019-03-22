import React from 'react';

import IOManagerView from '../views/IOManagerView';
import { observer } from 'mobx-react';

const CSV_SEPARATOR = ",";

@observer
class IOManagerController extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayed: true
        }

        this.handleFileChosen = this.handleFileChosen.bind(this);
        this.activeLeft = this.activeLeft.bind(this);
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

    activeLeft(){
        this.props.UI.activeLeft();
    }

    render() {
        const { inputFiles, UI } = this.props;
        return (
            <IOManagerView 
                inputFiles={inputFiles.getInputFiles()}
                leftIsActive={UI.leftState()}

                handleFileChosen={this.handleFileChosen}
                activeLeft={this.activeLeft}
            />
        )
    }
}

export default IOManagerController;