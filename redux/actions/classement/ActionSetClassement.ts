import {Classement} from "../../../model/Classement";
import {CLASSEMENT_LOAD} from "../../../constantes";

export const actionSetClassement = (classementList: Classement[]) => {
    return {
        type: CLASSEMENT_LOAD,
        payload: classementList,
    };
}
