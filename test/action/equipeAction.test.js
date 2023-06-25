import { actionSetClassement } from '../../redux/actions/classement/ActionSetClassement';
import { actionGetEquipe } from '../../redux/actions/equipe/ActionGetEquipe'; 
import { actionSetEquipe } from '../../redux/actions/equipe/ActionSetEquipe';
import { EQUIPE_LIST } from '../../data/stub/stubEquipe';
import { EQUIPE_LOAD } from '../../constantes';


describe('actionGetClassement', () => {
  it('should dispatch actionSetEquipe with EQUIPE_LIST on error', async () => {
    const dispatch = jest.fn();
    const mockFetch = jest.fn().mockRejectedValue(new Error('API Error'));

    global.fetch = mockFetch;

    await actionGetEquipe()(dispatch);

    expect(mockFetch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(actionSetEquipe(EQUIPE_LIST));
  });
  it('should create an action with actionSetEquipe type', async () => {
      const expectedAction = {
        type: EQUIPE_LOAD,
        payload: EQUIPE_LIST,
      };
  
      const action = actionSetEquipe(EQUIPE_LIST);
  
      expect(action).toEqual(expectedAction);
  });
});