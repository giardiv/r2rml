import React from 'react';

import { faQuestionCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react';

@observer
class ColumnsReaderView extends React.Component {

    render() {
        const getListp = <h2>hop</h2>
        const getList = () => {
            //return <h2>hopo</h2>
            if (this.props.inputFiles.length == 0) {
                return null;
            }
    
            console.log(this.props.inputFiles);
            this.props.inputFiles.map((file) => {
                return (
                    <>
                        <header>
                            <h3>{file.name} <span className="tag">CSV</span></h3>
                        </header>
                        <section>
                            <div>
                                <h4>additionalProperty</h4>
                                <span className="tag classic">PropertyValue </span>
                            </div>
                            <div>
                                <h4>address</h4>
                                <span className="tag classic">Address</span><span className="tag classic">Text</span>
                                <p>
                                    An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs.
                            </p>
                            </div>
                        </section>
                    </>
                    )
            })
        }

        
        return (

            <aside className="columns-reader">
                {this.props.inputFiles.length}
                {getList()}
            </aside>
        )
    }
}

export default ColumnsReaderView;