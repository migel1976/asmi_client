import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import eventReducer from './eventReducer';

const rootReducer=combineReducers({eventPage:eventReducer});
const store=createStore(rootReducer,applyMiddleware(thunkMiddleware));

export default store;
