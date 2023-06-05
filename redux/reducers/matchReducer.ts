import {MATCH_CHANGED} from "../../constantes";
import { MATCH_LIST } from "../../data/stub/stubMatch";

const initialState = {
    match: MATCH_LIST,
  }
  
  export default  function matchReducer (state = initialState, action) {
    switch (action.type) {
        case MATCH_CHANGED:
            return {...state, selectedSport: action.match};
        default:
            return state;
    }
}