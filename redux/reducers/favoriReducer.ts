import {FAVORI_CHANGED} from "../../constantes";
import { FAVORI_LIST } from "../../data/stub/stubFavori";
const initialState = {
    favori: FAVORI_LIST,
  }
  
  export default  function favoriReducer (state = initialState, action) {
    switch (action.type) {
        case FAVORI_CHANGED:
            return {...state, selectedSport: action.favori};
        default:
            return state;
    }
}