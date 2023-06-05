import {MATCH_CHANGED} from "../../constantes";
import { MATCH_LIST } from "../../data/stub/stubMatch";

const initialState = {
    match: MATCH_LIST,
  }
  
  export default  function matchReducer (state = initialState, action) {
    switch (action.type) {
        case MATCH_CHANGED:
            initialState.match = action.payload;
            return {...state, selectedSport: initialState.match};
        default:
            return state;
    }
}