import {COMPETITION_CHANGED} from "../../constantes";
import { COMPETITION_LIST } from "../../data/stub/stubCompetition";
const initialState = {
    competition: COMPETITION_LIST,
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