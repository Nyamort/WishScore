import { actionGetCompetition } from '../../redux/actions/competition/ActionGetCompetition';
import { actionSetCompetition } from '../../redux/actions/competition/ActionSetCompetition';
import { COMPETITION_LIST } from '../../data/stub/stubCompetition'; 
import { COMPETITIONS_LOAD } from '../../constantes';


describe('actionGetClassement', () => {
  it('should dispatch actionSetCompetition with COMPETITION_LIST on error', async () => {
    const dispatch = jest.fn();
    const mockFetch = jest.fn().mockRejectedValue(new Error('API Error'));

    global.fetch = mockFetch;

    await actionGetCompetition()(dispatch);

    expect(mockFetch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(actionSetCompetition(COMPETITION_LIST));
  });
  it('should create an action with actionSetCompetition type', async () => {
      const expectedAction = {
        type: COMPETITIONS_LOAD,
        payload: COMPETITION_LIST,
      };
  
      const action = actionSetCompetition(COMPETITION_LIST);
  
      expect(action).toEqual(expectedAction);
  });
});