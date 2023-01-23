import {combineReducers, createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import clockReducer from './reducers/clockReducer';

const indexReducer= combineReducers({clockReducer});
export default createStore(indexReducer, {}, applyMiddleware(ReduxThunk));