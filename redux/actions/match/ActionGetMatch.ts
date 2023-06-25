import {Equipe} from "../../../model/Equipe";
import {CLASSEMENT_LOAD} from "../../../constantes";
import {MATCH_LIST} from "../../../data/stub/stubMatch";
import {actionSetMatch} from "./ActionSetMatch";


export const actionGetMatch = () => {
    //select the url
    let url = "";
    return async dispatch => {
        try {
            const matchPromise = await fetch(url);
            const matchListJson = await matchPromise.json();
            // @ts-ignore
            const matchList: Match[] = matchListJson.map(elt => new Match(elt.id, elt.equipe1Id, elt.equipe2Id, elt.score1, elt.score2, elt.date_match, elt.competitionId));
            dispatch(actionSetMatch(matchList));
        } catch (error) {
            // @ts-ignore
            dispatch(actionSetMatch(MATCH_LIST));
        }
    }
}