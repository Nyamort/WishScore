import {Classement} from "../../../model/Classement";
import {CLASSEMENT_LOAD} from "../../../constantes";
import {COMPETITION_LIST} from "../../../data/stub/stubCompetition";
import {actionSetCompetition} from "./ActionSetCompetition";


export const actionGetCompetition = () => {
    //select the url
    let url = "";
    return async dispatch => {
        try {
            const competitionPromise = await fetch(url);
            const competitionListJson = await competitionPromise.json();
            // @ts-ignore
            const competitionList: Competition[] = competitionListJson.map(elt => new Competition(elt.id,elt.name,elt.sportId,elt.equipeId));

            dispatch(actionSetCompetition(competitionList));
        } catch (error) {
            dispatch(actionSetCompetition(COMPETITION_LIST));
        }
    }
}