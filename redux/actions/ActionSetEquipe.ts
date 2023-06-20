import {Equipe} from "../../model/Equipe";

export function actionSetEquipe(equipeList: Equipe[]) {
    return {
        type: "COMPETITION_LOAD",
        payload: equipeList,
    };
}