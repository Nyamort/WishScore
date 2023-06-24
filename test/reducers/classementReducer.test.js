import classementReducer from "../../redux/reducers/classementReducer";
import { CLASSEMENT_LIST } from "../../data/stub/stubClassement";

describe('classementReducer', () => {
  it('should return stubValue', () => {
    const expectedState = {
      classements: []
    };

    const newState = classementReducer(undefined, {});
    expect(newState).toEqual(expectedState);
  });
  it('should handle COMPETITIONS_LOAD action', () => {
    const classements = [];
    const action = {
      type: 'CLASSEMENT_LOAD',
      payload: classements
    };

    const nextState = classementReducer(undefined, action);
    expect(nextState.classements).toBeNull;
  });
});