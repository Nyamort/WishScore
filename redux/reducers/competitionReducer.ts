import {COMPETITIONS_LOAD} from "../../constantes";
import { COMPETITION_LIST } from "../../data/stub/stubCompetition";
const initialState = {
    competitions: [],
  }

export default function competitionReducer(state = initialState, action) {
    switch (action.type) {
        case COMPETITIONS_LOAD:
            if (action.payload.length !== 0) {
                const newCompetitions = action.payload.filter(
                    (competition) =>
                        !state.competitions.find((c) => c.id === competition.id)
                );
                return {
                    ...state,
                    competitions: [...state.competitions, ...newCompetitions],
                };
            }
            return state;
        default:
            return state;
    }
}