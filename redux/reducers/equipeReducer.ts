import {EQUIPE_CHANGED} from "../../constantes";
import { EQUIPE_LIST } from "../../data/stub/stubEquipe";
const initialState = {
    equipe: EQUIPE_LIST,
  }
  
  export default  function equipeReducer (state = initialState, action) {
    switch (action.type) {
        case EQUIPE_CHANGED:
            initialState.equipe = action.payload;
            return {...state, selectedSport: initialState.equipe};
        default:
            return state;
    }
}