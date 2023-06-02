import {MATCH_CHANGED} from "../../constantes";

const initialState = {
    match: '',
  }
  
  export default  function equipeReducer (state = initialState, action) {
    switch (action.type) {
        case MATCH_CHANGED:
            initialState.match = action.payload;
            return {...state, selectedSport: initialState.match};
        default:
            return state;
    }
}