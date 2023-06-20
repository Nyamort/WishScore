import {Equipe} from "../../model/Equipe";
import {CLASSEMENT_LOAD} from "../../constantes";
import {EQUIPE_LIST} from "../../data/stub/stubEquipe";
import {actionSetEquipe} from "./ActionSetEquipe";


export const actionGetEquipe = () => {
    let url = "";
    //In order to use await your callback must be asynchronous using async keyword.
    return async dispatch => {
        //Then perform your asynchronous operations.
        try {
            //Have it first fetch data from our starwars url.
            const equipePromise = await fetch(url);
            //Then use the json method to get json data from api/
            const equipeListJson = await equipePromise.json();
            // @ts-ignore
            const equipeList: Classement[] = equipeListJson.map(elt => new Equipe(elt.id,elt.name));
            dispatch(actionSetEquipe(equipeList)); //dispatch???
        } catch (error) {
            // @ts-ignore
            dispatch(actionSetEquipe(EQUIPE_LIST));
            //You can dispatch to another action if you want to display an error message in the application
            //dispatch(fetchDataRejected(error))
        }
    }
}