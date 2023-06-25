import { actionSetClassement } from '../../redux/actions/classement/ActionSetClassement';
import { actionGetClassement } from '../../redux/actions/classement/ActionGetClassement';
import { CLASSEMENT_LIST } from '../../data/stub/stubClassement';
import { CLASSEMENT_LOAD } from '../../constantes';


describe('actionGetClassement', () => {
  it('should dispatch actionSetClassement with CLASSEMENT_LIST on error', async () => {
    const dispatch = jest.fn();
    const mockFetch = jest.fn().mockRejectedValue(new Error('API Error'));

    global.fetch = mockFetch;

    await actionGetClassement()(dispatch);

    expect(mockFetch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(actionSetClassement(CLASSEMENT_LIST));
  });
  it('should create an action with actionSetClassement type', async () => {
      const expectedAction = {
        type: CLASSEMENT_LOAD,
        payload: CLASSEMENT_LIST,
      };
  
      const action = actionSetClassement(CLASSEMENT_LIST);
  
      expect(action).toEqual(expectedAction);
  });
});