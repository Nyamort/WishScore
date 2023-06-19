import {CLASSEMENT_LOAD} from "../../constantes";
import { CLASSEMENT_LIST } from "../../data/stub/stubClassement";
const initialState = {
    classements: [],//CLASSEMENT_LIST,
  }
  
  export default  function classementReducer (state = initialState, action) {
    switch (action.type) {
        case CLASSEMENT_LOAD:
        return {...state,
            classements: action.payload};
        default:
            return state;
    }
}