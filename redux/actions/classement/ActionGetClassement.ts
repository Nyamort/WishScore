import {Classement} from "../../../model/Classement";
import {CLASSEMENT_LOAD} from "../../../constantes";
import {CLASSEMENT_LIST} from "../../../data/stub/stubClassement";
import {actionSetClassement} from "./ActionSetClassement";


export const actionGetClassement = () => {
    //select the url
    let url = "";
    return async dispatch => {
        try {
            const classementPromise = await fetch(url);
            const classementListJson = await classementPromise.json();
            // @ts-ignore
            const classementList: Classement[] = classementListJson.map(elt => new Classement(elt.id, elt.position, elt.equipeId, elt.nombrePoints, elt.matchJoue, elt.competitionId));
            dispatch(actionSetClassement(classementList));
        } catch (error) {
            // @ts-ignore
            dispatch(actionSetClassement(CLASSEMENT_LIST));
        }
    }
}