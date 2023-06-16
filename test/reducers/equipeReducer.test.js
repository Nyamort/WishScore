import equipeReducer from "../../redux/reducers/equipeReducer";
import { EQUIPE_LIST } from "../../data/stub/stubEquipe";

describe('equipeReducer', () => {
    it('should return stubValue', () => {
      const expectedState = {
        equipes: EQUIPE_LIST
      };
  
      const newState = equipeReducer(undefined, {});
      expect(newState).toEqual(expectedState);
    });
  });