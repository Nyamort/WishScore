import {SPORT_CHANGED, SPORT_LOAD} from "../../constantes";
import { SPORT_LIST } from "../../data/stub/stubSport";

export const initialState = {
    selectedSport: SPORT_LIST[0],
    sports: []
}

export default function sportReducer(state = initialState, action) {
    switch (action.type) {
        case SPORT_CHANGED:
            return { ...state, selectedSport: action.payload };
        case SPORT_LOAD:
            return {
                ...state,
                sports: [...state.sports, ...action.payload],
            };
        default:
            return state;
    }
}