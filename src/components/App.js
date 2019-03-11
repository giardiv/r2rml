import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../custom.scss';


// TODO: Use proptips or TypeScript

import PeanutList from './PeanutList';
import Form from './Form';

//import * as d3 from 'd3';
import source from '../input/example1.csv';
import schema from '../input/schema-prop.json';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      source: "../input/example1.csv",
      tableName: "PERSONAS",
      columns: [],
      concept: "Person",
      mappings: [],
      properties: [],
      primaryKey: "id",
      content: "null"
    }
    this.handler = this.handler.bind(this);
    this.selectHandler = this.selectHandler.bind(this);
    this.generate = this.generate.bind(this);
  }

  componentDidMount(){
    this.mapSource();
    this.getProperties(this.state.concept)
  }
  
  
  mapSource(){
    // TODO use a CSV parser: ignore comments,...
    // TODO import file from the UI (cf react file reader) https://blog.teamtreehouse.com/reading-files-using-the-html5-filereader-api
    fetch(source)
    .then((r) => r.text())
    .then(text  => {
      const columns = text.split("\n")[0].split(",");
      const mappings = columns.map(function(column){
        return { column: column, property: null};
      });
      console.log(mappings);
      const newState = Object.assign({}, this.state, { columns : columns, mappings : mappings } );
      this.setState(newState);
    })
  }

  getProperties(concept){
    const newState = Object.assign({}, this.state, { properties : schema[concept] } );
    this.setState(newState);
  }

  generate(){
    console.log("generate");
    const randomId = Math.random().toString(36).substring(10);
    let _this = this;

    const peanuts = this.state.columns.map(function(column){
      let target = _this.state.mappings.find(mapping => mapping.column == column).property;
      if(target != null){
        let pos = `
        rr:predicateObjectMap [
          rr:predicateMap [ rr:constant schema:${target} ];
          rr:objectMap    [ rr:termType rr:Literal; rr:column "\"${column}\""; ];
        ];

       `;
        return pos;
      } else {
        return null;
      }
    });

    let content = `
    @prefix rr: <http://www.w3.org/ns/r2rml#> .
    @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
    @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
    @prefix dcat: <http://www.w3.org/ns/dcat#> .
    @prefix dct: <http://purl.org/dc/terms/> .
    @prefix mpv: <http://mappingpedia.linkeddata.es/vocab/> .
    @prefix skos: <http://www.w3.org/2004/02/skos/core#> .
    @prefix schema: <http://schema.org/> .
    @base <http://mappingpedia.linkeddata.es/resource/> .
    <${randomId}>
        rr:logicalTable [
            rr:tableName  "\"${this.state.tableName}\""
        ];
        rr:subjectMap [
            a rr:Subject; rr:termType rr:IRI; rr:class schema:${this.state.concept};
            rr:column "\"${this.state.primaryKey}\"";
        ];
        ${peanuts}
    `;
    console.log(content);
    const newState = Object.assign({}, this.state, { content : content } );
    this.setState(newState);
  }

  handler(e){
    const newState = Object.assign({}, this.state, { primaryKey : e.target.value } );
    this.setState(newState);
  }

  selectHandler(e, column){
    let mappings = this.state.mappings;
    const index = mappings.findIndex(mapping => mapping.column == column);
    mappings[index].property = e.target.value;
    
    const newState = Object.assign({}, this.state, { mappings : mappings } );
    this.setState(newState);
    console.log(this.state);
  }

  render() {
    let _this = this;

    const peanutList = this.state.columns.map(function(column){
      return <Peanut column={column} properties={_this.state.properties} selectHandler={_this.selectHandler}/>
    });
    const contentStyle = {
      whiteSpace: "pre-line",
      textAlign: "left"
    };
    return (
      <div className="App">
        <div className="top-inputs">
          <div className="container">
            <div class="row py-2">
                <div class="col-xs-12">
                    <label>Input schemas <FontAwesomeIcon icon={faQuestionCircle} /></label>
                    <button class="outline-yellow">Houses-db-01.sql</button>
                    <label>Output schemas <FontAwesomeIcon icon={faQuestionCircle} /></label>
                    <div className="schema-select">
                      <div className="search-group">
                          <div className="select-wrapper"><select><option value="foaf">foaf</option></select></div>
                          <input type="text" placeholder="select-targetted classes"/>
                      </div>
                      <div className="purple middle-label">or</div>
                      <button className="full-purple">import OWL file</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="container">
            <div class="row py-2">
              <div className="col-xs-12 search-section">
                <input className="searcher" placeholder="Search for a columns or a class attribute"/>
                <div class="type-selector">
                  <label class="checkbox-container selected">columns only
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox-container">attributes
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox-container shared">attributes
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>

        <label>Primary key {this.state.primaryKey}</label>
        <SelectPrimayKey props={this.state.primaryKey} columns={this.state.columns} handler={this.handler}/>
        <button onClick={this.generate}>Generate</button>
        <hr/>
        <PeanutList/>
        <Form/>
        {peanutList}
        <hr/>
        <p style={contentStyle}>
          {this.state.content}
        </p>
      </div>
    );
  }
}

class SelectPrimayKey extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const columnList = this.props.columns.map(function(column){
      return <option value={column}>{column}</option>
    });
    return(
      <select value={this.props.value} onChange={this.props.handler}>
          {columnList}
        </select>
    )
  }
}

class Peanut extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const propertyList = this.props.properties.map(function(property){
      return <option value={property}>{property}</option>;
    })
    return(
    <div>
      <h5>{this.props.column}</h5>
      <select value="" target={this.props.column} onChange={(e) => this.props.selectHandler(e, this.props.column)}>{propertyList}</select>
    </div>
    );
  }
}

export default App;
