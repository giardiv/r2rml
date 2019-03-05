import React, { Component } from 'react';

class Peanut extends Component{  
    render(){
      return(
      <div>
        <h5>{this.props.column}</h5>
      </div>
      );
    }
}

export default Peanut;