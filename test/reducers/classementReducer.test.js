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
});