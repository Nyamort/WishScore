import classementReducer from "../../redux/reducers/classementReducer";
import { CLASSEMENT_LIST } from "../../data/stub/stubClassement";

describe('classementReducer', () => {
  it('should return stubValue', () => {
    const expectedState = {
      classements: CLASSEMENT_LIST
    };

    const newState = classementReducer(undefined, {});
    expect(newState).toEqual(expectedState);
  });
  it('should handle COMPETITIONS_LOAD action', () => {
    const classements = { competitionId: "1", equipeId: '0', id: "0","matchJoue": 35, nombrePoints:85, position:1 };
    const action = {
      type: 'CLASSEMENT_LOAD',
      payload: classements
    };

    const nextState = classementReducer(undefined, action);

    expect(nextState.classements).toContainEqual(classements);
  });
});