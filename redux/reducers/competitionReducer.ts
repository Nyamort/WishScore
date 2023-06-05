import {COMPETITIONS_LOAD} from "../../constantes";
import { COMPETITION_LIST } from "../../data/stub/stubCompetition";
const initialState = {
    competitions: COMPETITION_LIST,
  }
  
  export default  function competitionReducer (state = initialState, action) {
    switch (action.type) {
        case COMPETITIONS_LOAD:
            state.competitions.push(action.competitions.filter(competition => !state.competitions.find(c => c.id === competition.id)));
            return {...state};
        default:
            return state;
    }
}