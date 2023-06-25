import {Equipe} from "../../../model/Equipe";
import {CLASSEMENT_LOAD} from "../../../constantes";
import {EQUIPE_LIST} from "../../../data/stub/stubEquipe";
import {actionSetEquipe} from "./ActionSetEquipe";


export const actionGetEquipe = () => {
    //select the url
    let url = "";
    return async dispatch => {
        try {
            const equipePromise = await fetch(url);
            const equipeListJson = await equipePromise.json();
            // @ts-ignore
            const equipeList: Classement[] = equipeListJson.map(elt => new Equipe(elt.id,elt.name));
            dispatch(actionSetEquipe(equipeList));
        } catch (error) {
            // @ts-ignore
            dispatch(actionSetEquipe(EQUIPE_LIST));
        }
    }
}