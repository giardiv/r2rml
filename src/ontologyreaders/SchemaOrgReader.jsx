
import source from "../ontologysources/SchemaOrgSource.json";

// Maximum number of subclass
const TREE_DEPTH = 5;
const TOP_CLASS = "Thing";
const DATA_TYPES = ["Boolean", "Date", "Datetime", "Number", "Text", "Time"];

class SchemaOrgReader {

    classes = {};
    properties = {};

    init() {
        this.setClasses();
        this.setProperties();
    }

    setClasses() {
        source["@graph"].forEach(currentClass => {
            if (currentClass["@type"] == "rdfs:Class") {
                this.classes[currentClass["rdfs:label"]] = {
                    "id": currentClass["@id"],
                    "name": currentClass["rdfs:label"],
                    "comment": currentClass["rdfs:comment"],
                    "subClassOf": this.getSubClassOf(currentClass),
                    "properties": []
                };
            }
        });

        for (var i = 1; i < TREE_DEPTH; i++) {
            Object.keys(this.classes).forEach((currentClassKey) => {
                let currentClass = this.classes[currentClassKey];
                currentClass.subClassOf.forEach((subClass, index) => {
                    let lastElement = subClass[subClass.length - 1]
                    if (this.classes[lastElement] && lastElement !== TOP_CLASS && !SchemaOrgReader.isDataType(this.classes[lastElement])) {
                        subClass.push(this.classes[lastElement]["subClassOf"][0][0]);
                    }
                    this.classes[currentClassKey]["subClassOf"][index] = subClass;
                })
            }, this.classes);
        }
    }

    static getLabelFromUrl(url) {
        return url.split("/").pop();
    }

    static isDataType(className) {
        return DATA_TYPES.includes(className);
    }

    getSubClassOf(currentClass) {
        if (currentClass["rdfs:label"] == TOP_CLASS) {
            return []
        }
        return Array.isArray(currentClass["rdfs:subClassOf"]) ?
            currentClass["rdfs:subClassOf"].map((subClass) => {
                return [SchemaOrgReader.getLabelFromUrl(subClass["@id"])]
            }) : [[SchemaOrgReader.getLabelFromUrl(currentClass["rdfs:subClassOf"]["@id"])]];
    }

    setProperties() {
        source["@graph"].forEach(property => {
            if (property["@type"] == "rdf:Property") {
                this.properties[property["rdfs:label"]] = {
                    "id": property["@id"],
                    "name": property["rdfs:label"],
                    "comment": property["rdfs:comment"],
                    "expectedType": this.getExpectedType(property)
                }
                let includes = !Array.isArray(property["http://schema.org/domainIncludes"]) ?
                    [property["http://schema.org/domainIncludes"]] :
                    property["http://schema.org/domainIncludes"];
                if(includes[0]){
                    includes.forEach((include) => {
                        this.classes[SchemaOrgReader.getLabelFromUrl(include["@id"])]["properties"].push(property["rdfs:label"]);
                    })
                }
            }
        })
    }

    getExpectedType(property) {
        if (!property["http://schema.org/rangeIncludes"]) {
            return []
        }
        return Array.isArray(property["http://schema.org/rangeIncludes"]) ?
            property["http://schema.org/rangeIncludes"].map((type) => {
                return SchemaOrgReader.getLabelFromUrl(type["@id"])
            }) :
            [SchemaOrgReader.getLabelFromUrl(property["http://schema.org/rangeIncludes"]["@id"])]
    }

    getClassByPiece(piece){
        piece = piece.toUpperCase();
        let classes = [];
        if(piece == "") return null;

        for (const key of Object.keys(this.classes)) {
            if(key.toUpperCase().startsWith(piece)){
                classes.push(key);
            }
        }
        for (const key of Object.keys(this.classes)) {
            if(key.toUpperCase().includes(piece, 1)){
                classes.push(key);
            }
        }
        classes = classes.map((key) => this.classes[key]);

        if(classes.length == 0) classes.push(null);

        return classes;
    }

    getClass(name){
        return this.classes[name];
    }
}

export default SchemaOrgReader;