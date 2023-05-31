import {SPORT_CHANGED} from "../../constantes";

const initialState = {
    selectedSport: '',
}

export default  function appReducer (state = initialState, action) {
    switch (action.type) {
        case SPORT_CHANGED:
            return {...state, selectedSport: action.payload};
        default:
            return state;
    }
}