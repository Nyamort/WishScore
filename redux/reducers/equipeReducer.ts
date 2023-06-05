import {EQUIPE_LOAD} from "../../constantes";
import { EQUIPE_LIST } from "../../data/stub/stubEquipe";
const initialState = {
    equipes: EQUIPE_LIST,
  }
  
  export default  function equipeReducer (state = initialState, action) {
    switch (action.type) {
        case EQUIPE_LOAD:
            state.equipes.push(action.payload)
            return {...state};
        default:
            return state;
    }
}