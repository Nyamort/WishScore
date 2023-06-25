
import {Match} from "../../../model/Match";

export function actionSetMatch(matchList: Match[]) {
    return {
        type: "MATCH_CHANGED",
        match: matchList,
    };
}