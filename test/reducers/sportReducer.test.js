import sportReducer from "../../redux/reducers/sportReducer";
import { SPORT_LIST } from "../../data/stub/stubSport";

describe('sportReducer', () => {
    const initialState = {
        selectedSport: SPORT_LIST[0],
        sports: SPORT_LIST
    }
    it('should return stubValue by default', () => {
      const expectedState = {
        selectedSport: SPORT_LIST[0],
        sports: SPORT_LIST
      };
  
      const newState = sportReducer(undefined, {});
      expect(newState).toEqual(expectedState);
    });
    it('should handle SPORT_CHANGED action', () => {
        const selectedSport = 'Football';
        const action = {
          type: 'SPORT_CHANGED',
          payload: selectedSport
        };
    
        const nextState = sportReducer(initialState, action);
    
        expect(nextState.selectedSport).toEqual(selectedSport);
      });
  });