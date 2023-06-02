import {EQUIPE_CHANGED} from "../../constantes";

const initialState = {
    equipe: '',
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