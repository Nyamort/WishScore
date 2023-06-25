import {Equipe} from "../../../model/Equipe";

export function actionSetEquipe(equipeList: Equipe[]) {
    return {
        type: "EQUIPE_LOAD",
        payload: equipeList,
    };
}