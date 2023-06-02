import {GET_CLASSEMENT} from "../../constantes";

const initialState = {
    classement: [],
    selectedSport: 'foot',
  }
  
  export default  function classementReducer (state = initialState, action) {
    switch (action.type) {
        case GET_CLASSEMENT:
            initialState.selectedSport = action.payload;
            return {...state, selectedSport: initialState.selectedSport};
        default:
            return state;
    }
}