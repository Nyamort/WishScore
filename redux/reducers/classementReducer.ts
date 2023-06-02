import {GET_CLASSEMENT} from "../../constantes";

const initialState = {
    classement: [],
  }
  
  export default  function classementReducer (state = initialState, action) {
    switch (action.type) {
        case GET_CLASSEMENT:
            initialState.classement = action.payload;
            return {...state, selectedSport: initialState.classement};
        default:
            return state;
    }
}