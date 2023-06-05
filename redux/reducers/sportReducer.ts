import {SPORT_CHANGED} from "../../constantes";
import { SPORT_LIST } from "../../data/stub/stubSport";

export const initialState = {
    selectedSport: 'foot',
}

export default  function sportReducer (state = initialState, action) {
    switch (action.type) {
        case SPORT_CHANGED:
            initialState.selectedSport = action.payload;
            return {...state, selectedSport: initialState.selectedSport};
        default:
            return state;
    }
}