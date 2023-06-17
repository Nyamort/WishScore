import competitionReducer from "../../redux/reducers/competitionReducer";
import { COMPETITION_LIST } from "../../data/stub/stubCompetition";

describe('competitionReducer', () => {
    it('should return stubValue', () => {
      const expectedState = {
        competitions: COMPETITION_LIST
      };
  
      const newState = competitionReducer(undefined, {});
      expect(newState).toEqual(expectedState);
    });
    it('should handle COMPETITIONS_LOAD action', () => {
      const competition = { id: "1", label: 'Ligue1', sportId: "0" };
      const action = {
        type: 'COMPETITIONS_LOAD',
        payload: competition
      };
  
      const nextState = competitionReducer(undefined, action);
  
      expect(nextState.competitions).toContainEqual(competition);
    });
  });