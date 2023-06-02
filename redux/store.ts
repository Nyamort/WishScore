import {configureStore} from '@reduxjs/toolkit'
import sportReducer from './reducers/sportReducer';
import classementReducer from './reducers/classementReducer';
import competitionReducer from './reducers/competitionReducer';
import {useSelector} from 'react-redux';
import { CLASSEMENT_LIST } from '../data/stub/stubClassement';
import { EQUIPE_LIST } from '../data/stub/stubEquipe';
import { FAVORI_LIST } from '../data/stub/stubFavori';
import { MATCHLIST } from '../screens/MatchScreen';
import { SPORT_LIST } from '../data/stub/stubSport';
import { COMPETITION_LIST } from '../data/stub/stubCompetition';

const reducer = {
    appReducer: sportReducer,
    classementReducer: classementReducer,
    competitionReducer: competitionReducer,
    
}

const store = configureStore({
    reducer,
});

export default store;