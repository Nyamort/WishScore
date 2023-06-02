import {COMPETITION_CHANGED} from "../../constantes";

const initialState = {
    classement: [],
    selectedSport: 'foot',
  }
  
  export default  function competitionReducer (state = initialState, action) {
    switch (action.type) {
        case COMPETITION_CHANGED:
            initialState.selectedSport = action.payload;
            return {...state, selectedSport: initialState.selectedSport};
        default:
            return state;
    }
}