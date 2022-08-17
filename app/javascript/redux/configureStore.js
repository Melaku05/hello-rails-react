import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import greetingReducer from './greetings/greetings'

const rootReducer = combineReducers({
  greetings: greetingReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;