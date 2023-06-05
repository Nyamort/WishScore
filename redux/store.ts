import {configureStore} from '@reduxjs/toolkit'
import sportReducer from './reducers/sportReducer';
import classementReducer from './reducers/classementReducer';
import competitionReducer from './reducers/competitionReducer';
import equipeReducer from './reducers/equipeReducer';
import matchReducer from './reducers/matchReducer';
import favoriReducer from './reducers/favoriReducer';

const reducer = {
    sportReducer: sportReducer,
    classementReducer: classementReducer,
    competitionReducer: competitionReducer,
    equipeReducer: equipeReducer,
    matchReducer: matchReducer,
    favoriReducer: favoriReducer,
}

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default store;