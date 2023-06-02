import {COMPETITION_CHANGED} from "../../constantes";

const initialState = {
    competition: '',
  }
  
  export default  function competitionReducer (state = initialState, action) {
    switch (action.type) {
        case COMPETITION_CHANGED:
            initialState.competition = action.payload;
            return {...state, selectedSport: initialState.competition};
        default:
            return state;
    }
}