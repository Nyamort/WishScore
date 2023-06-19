import {Competition} from "../../model/Competition";

export function actionSetCompetition(competitionList: Competition[]) {
    return {
        type: "COMPETITION_LOAD",
        payload: competitionList,
    };
}