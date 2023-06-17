import favoriReducer from "../../redux/reducers/favoriReducer";


describe('matchReducer', () => {
    const initialState = {
        favoris: {
            sports: [],
            teams: [],
            competition: []
        }
      }
      it('should handle FAVORIS_SPORT_LOAD action', () => {
        const favoris = {
            sports: ['Tennis', 'Football'],
            teams: [],
            competition: []
          };
          const action = {
            type: 'FAVORIS_SPORT_LOAD',
            payload: favoris
          };
      
          const nextState = favoriReducer(initialState, action);
      
          expect(nextState.favoris).toEqual(favoris);
      });
      it('should handle FAVORI_SPORT_ADD action', () => {
        const sport = 'Tennis';
        const action = {
        type: 'FAVORI_SPORT_ADD',
        payload: sport
        };

        const nextState = favoriReducer(initialState, action);

        expect(nextState.favoris.sports).toContain(sport);
      });
      it('should handle FAVORI_SPORT_REMOVE action', () => {
        const sportToRemove = 'Basket';
        const initialStateWithSport = {
        favoris: {
            sports: ['Basket', 'Football'],
            teams: [],
            competition: []
        }
        };
        const action = {
        type: 'FAVORI_SPORT_REMOVE',
        payload: 'Basket'
        };

        const nextState = favoriReducer(initialStateWithSport, action);

        expect(nextState.favoris.sports).not.toContain(sportToRemove);

      });
      it('should handle FAVORI_COMPETITION_ADD action', () => {
        const competition = 'Tour de france';
        const action = {
        type: 'FAVORI_COMPETITION_ADD',
        payload: competition
        };

        const nextState = favoriReducer(initialState, action);

        expect(nextState.favoris.competition).toContain(competition);
      });
      it('should handle FAVORI_COMPETITION_REMOVE action', () => {
        const competitionToRemove = 'Tour de france';
        const initialStateWithCompetition = {
        favoris: {
            sports: [],
            teams: [],
            competition: ['Tour de france','Roland-Garros']
        }
        };
        const action = {
        type: 'FAVORI_COMPETITION_REMOVE',
        payload: 'Tour de france'
        };

        const nextState = favoriReducer(initialStateWithCompetition, action);

        expect(nextState.favoris.competition).not.toContain(competitionToRemove);
        
      });
      it('should handle default action', () => {
        const expectedState = {
            favoris: {
                sports: [],
                teams: [],
                competition: []
            }
          };
      
          const newState = favoriReducer(undefined, {});
          expect(newState).toEqual(expectedState);
      });
    
  });