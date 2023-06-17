import matchReducer from "../../redux/reducers/matchReducer";
import { MATCH_LIST } from "../../data/stub/stubMatch";

describe('matchReducer', () => {
    it('should handle default action', () => {
      const expectedState = {
        match: MATCH_LIST
      };
  
      const newState = matchReducer(undefined, {});
      expect(newState).toEqual(expectedState);
    });
    
  });