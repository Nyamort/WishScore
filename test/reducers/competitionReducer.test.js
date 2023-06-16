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
  });