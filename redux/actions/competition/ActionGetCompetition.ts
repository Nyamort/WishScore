import {Classement} from "../../../model/Classement";
import {CLASSEMENT_LOAD} from "../../../constantes";
import {COMPETITION_LIST} from "../../../data/stub/stubCompetition";
import {actionSetCompetition} from "./ActionSetCompetition";


export const actionGetCompetition = () => {
    let url = "";
    //In order to use await your callback must be asynchronous using async keyword.
    return async dispatch => {
        //Then perform your asynchronous operations.
        try {
            //Have it first fetch data from our starwars url.
            const competitionPromise = await fetch(url);
            //Then use the json method to get json data from api/
            const competitionListJson = await competitionPromise.json();
            // @ts-ignore
            const competitionList: Competition[] = competitionListJson.map(elt => new Competition(elt.id,elt.name,elt.sportId,elt.equipeId));

            dispatch(actionSetCompetition(competitionList));
        } catch (error) {
            dispatch(actionSetCompetition(COMPETITION_LIST));
            //You can dispatch to another action if you want to display an error message in the application
            //dispatch(fetchDataRejected(error))
        }
    }
}