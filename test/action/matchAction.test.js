import { actionGetMatch } from '../../redux/actions/match/ActionGetMatch';
import { actionSetMatch } from '../../redux/actions/match/ActionSetMatch';
import { MATCH_LIST } from '../../data/stub/stubMatch';


describe('actionGetClassement', () => {
  it('should dispatch actionSetMatch with MATCH_LIST on error', async () => {
    const dispatch = jest.fn();
    const mockFetch = jest.fn().mockRejectedValue(new Error('API Error'));

    global.fetch = mockFetch;

    await actionGetMatch()(dispatch);

    expect(mockFetch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(actionSetMatch(MATCH_LIST));
  });

  it('should create an action with actionSetMatch type', async () => {
    const matchList = [
      {id: "1",equipe1Id: "0", equipe2Id: "1", score1: 5, score2: 4, date_match: new Date() ,competitionId: '1'},
      {id: "2",equipe1Id: "1", equipe2Id: "2", score1: 0, score2: 0, date_match: new Date() ,competitionId: '1'},
    ];

    const action = actionSetMatch(matchList);

    expect(action).toEqual({
      type: 'MATCH_CHANGED',
      match: matchList,
    });
  });
});