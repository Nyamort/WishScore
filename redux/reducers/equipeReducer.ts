import {EQUIPE_LOAD} from "../../constantes";
import { EQUIPE_LIST } from "../../data/stub/stubEquipe";
const initialState = {
    equipes: [],
  }
  
  export default  function equipeReducer (state = initialState, action) {
    switch (action.type) {
        case EQUIPE_LOAD:
            return {...state,
            equipes: action.payload};
        default:
            return state;
    }
}