import {CLASSEMENT_CHANGED} from "../../constantes";
import { CLASSEMENT_LIST } from "../../data/stub/stubClassement";
const initialState = {
    classement: CLASSEMENT_LIST,
  }
  
  export default  function classementReducer (state = initialState, action) {
    switch (action.type) {
        case CLASSEMENT_CHANGED:
            initialState.classement = action.payload;
            return {...state, selectedSport: initialState.classement};
        default:
            return state;
    }
}