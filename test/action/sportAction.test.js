import { actionGetSport } from '../../redux/actions/sport/ActionGetSport';
import { actionSetSport } from '../../redux/actions/sport/ActionSetSport';
import { SPORT_LIST } from '../../data/stub/stubSport'; 
import { SPORT_LOAD } from '../../constantes';


describe('actionGetClassement', () => {
  
  it('should dispatch actionSetSport with SPORT_LIST on error', async () => {
    const dispatch = jest.fn();
    const mockFetch = jest.fn().mockRejectedValue(new Error('API Error'));

    global.fetch = mockFetch;

    await actionGetSport()(dispatch);

    expect(mockFetch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(actionSetSport(SPORT_LIST));
  });
  it('should create an action with actionSetSport type', async () => {
      const expectedAction = {
        type: SPORT_LOAD,
        payload: SPORT_LIST,
      };
  
      const action = actionSetSport(SPORT_LIST);
  
      expect(action).toEqual(expectedAction);
  });
});