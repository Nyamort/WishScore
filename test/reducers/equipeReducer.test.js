import equipeReducer from "../../redux/reducers/equipeReducer";
import { EQUIPE_LIST } from "../../data/stub/stubEquipe";

describe('equipeReducer', () => {
  const initialState = {
    equipes: EQUIPE_LIST,
  }
    it('should return stubValue', () => {
      const expectedState = {
        equipes: EQUIPE_LIST
      };
  
      const newState = equipeReducer(undefined, {});
      expect(newState).toEqual(expectedState);
    });

    it('should handle EQUIPE_LOAD action', () => {
      const equipeToAdd = { id: 1, name: 'Équipe A' };
      const action = {
        type: 'EQUIPE_LOAD',
        payload: equipeToAdd
      };
  
      const nextState = equipeReducer(initialState, action);
  
      expect(nextState.equipes).toContain(equipeToAdd);
    });
  });