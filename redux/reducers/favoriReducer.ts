import {FAVORI_CHANGED} from "../../constantes";

const initialState = {
    favori: [],
  }
  
  export default  function equipeReducer (state = initialState, action) {
    switch (action.type) {
        case FAVORI_CHANGED:
            initialState.favori = action.payload;
            return {...state, selectedSport: initialState.favori};
        default:
            return state;
    }
}