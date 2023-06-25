import {MATCH_CHANGED} from "../../constantes";

const initialState = {
    match: [],
  }
  
  export default  function matchReducer (state = initialState, action) {
    switch (action.type) {
        case MATCH_CHANGED:
            return {...state, matchs: action.match};
        default:
            return state;
    }
}