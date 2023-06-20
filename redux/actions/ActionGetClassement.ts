import {Classement} from "../../model/Classement";
import {CLASSEMENT_LOAD} from "../../constantes";
import {CLASSEMENT_LIST} from "../../data/stub/stubClassement";
import {actionSetClassement} from "./ActionSetClassement";


export const actionGetClassement = () => {
    let url = "";
    //In order to use await your callback must be asynchronous using async keyword.
    return async dispatch => {
        //Then perform your asynchronous operations.
        try {
            //Have it first fetch data from our starwars url.
            const classementPromise = await fetch(url);
            //Then use the json method to get json data from api/
            const classementListJson = await classementPromise.json();
            // @ts-ignore
            const classementList: Classement[] = classementListJson.map(elt => new Classement(elt.id, elt.position, elt.equipeId, elt.nombrePoints, elt.matchJoue, elt.competitionId));
            dispatch(actionSetClassement(classementList)); //dispatch???
        } catch (error) {
            // @ts-ignore
            dispatch(actionSetClassement(CLASSEMENT_LIST));
            //You can dispatch to another action if you want to display an error message in the application
            //dispatch(fetchDataRejected(error))
        }
    }
}