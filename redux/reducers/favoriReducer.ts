import {
    FAVORI_COMPETITION_ADD, FAVORI_COMPETITION_REMOVE,
    FAVORI_SPORT_ADD,
    FAVORI_SPORT_REMOVE,
    FAVORIS_SPORT_LOAD
} from "../../constantes";
import {Sport} from "../../model/Sport";
import {Equipe} from "../../model/Equipe";
import {Competition} from "../../model/Competition";

export type Favoris = {
    competition: Competition[];
    sports: Sport[],
    teams: Equipe[],
}

const initialState = {
    favoris: {
        sports: [],
        teams: [],
        competition: []
    }
  }
  
  export default  function favoriReducer (state = initialState, action) {
    switch (action.type) {
        case FAVORIS_SPORT_LOAD:
            return {...state, favoris: action.payload}
        case FAVORI_SPORT_ADD:
            let favoris = [...state.favoris.sports];
            favoris.push(action.payload)
            return {...state, favoris: {...state.favoris, sports: favoris}}
        case FAVORI_SPORT_REMOVE:
            return {...state, favoris: {...state.favoris, sports: state.favoris.sports.filter(f => f.id !== action.payload.id)}}
        case FAVORI_COMPETITION_ADD:
            let competitions = [...state.favoris.competition];
            competitions.push(action.payload)
            return {...state, favoris: {...state.favoris, competition: competitions}}
        case FAVORI_COMPETITION_REMOVE:
            return {...state, favoris: {...state.favoris, competition: state.favoris.competition.filter(f => f.id !== action.payload.id)}}

        default:
            return state;
    }
}