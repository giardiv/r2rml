import React from 'react';

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react';

@observer
class ColumnsReaderView extends React.Component {

    render() {
        const getListp = <h2>hop</h2>
        const getList = () => {
            if (this.props.inputFiles.length == 0) {
                return <h2>First, import input schema</h2>;
            }

            const file = this.props.inputFiles[0];

            const columns = file.columns.map(
                (column) => {
                    return(
                        <div>
                            <h4>{column.name}</h4>
                            <span className="tag classic">{column.type}</span>
                        </div>
                    )
                }
            )

            return (
                <div>
                    <header>
                        <h3>{file.name} <span className="tag">{file.ext}</span></h3>
                    </header>
                    <section>
                        {columns}
                    </section>
                </div>
            )
        }


        return(
            <aside className={ "columns-reader" + ( this.props.isActive ? " active": "")} >
                <FontAwesomeIcon icon={faTimes} className="closer" onClick={this.props.disable()}/>
                { getList()}
            </aside >
        )
    }
}

export default ColumnsReaderView;