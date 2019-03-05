import { ADD_MAPPING } from "../constants/action-types";

const initialState = {
    mappings: []
};

function rootReducer(state = initialState, action) {
    if(action.type === ADD_MAPPING){
        return Object.assign({}, initialState, {
            mappings: state.mappings.concat(action.payload)
        })
    }
    return state;
};

export default rootReducer;