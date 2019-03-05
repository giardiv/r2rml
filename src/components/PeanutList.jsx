import React, { Component } from 'react';
import { connect } from "react-redux";

import Peanut from "./Peanut";

const mapStateToProps = state => {
    return { mappings: state.mappings }
};

const ConnectedList = ({mappings}) => (
  <div>
    <h2>PeanutList</h2>
    {mappings.map(mapping => (
      <Peanut column={mapping.title}/>
    ))}
    <hr/>
  </div>
);

const PeanutList = connect(mapStateToProps)(ConnectedList);

export default PeanutList;
