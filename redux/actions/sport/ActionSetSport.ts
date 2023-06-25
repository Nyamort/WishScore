import {Sport} from "../../../model/Sport";

export function actionSetSport(sportList: Sport[]) {
    return {
        type: "SPORT_LOAD",
        payload: sportList,
    };
}