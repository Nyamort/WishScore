import {configureStore} from '@reduxjs/toolkit'
import sportReducer from './reducers/sportReducer';

const reducer = {
    appReducer: sportReducer,
}

const store = configureStore({
    reducer,
});

export default store;