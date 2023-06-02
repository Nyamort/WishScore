import {SPORT_CHANGED} from "../../constantes";

export const initialState = {
    selectedSport: 'foot',
}

export default  function appReducer (state = initialState, action) {
    switch (action.type) {
        case SPORT_CHANGED:
            initialState.selectedSport = action.payload;
            return {...state, selectedSport: initialState.selectedSport};
        default:
            return state;
    }
}