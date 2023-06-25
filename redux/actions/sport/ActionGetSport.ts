import {SPORT_LIST} from "../../../data/stub/stubSport";
import {actionSetSport} from "./ActionSetSport";


export const actionGetSport = () => {
    //select the url
    let url = "";
    return async dispatch => {
        try {
            const sportPromise = await fetch(url);
            const sportListJson = await sportPromise.json();
            // @ts-ignore
            const sportList: Sport[] = sportListJson.map(elt => new Sport(elt.id,elt.label));
            dispatch(actionSetSport(sportList));
        } catch (error) {
            // @ts-ignore
            dispatch(actionSetSport(SPORT_LIST));
        }
    }
}