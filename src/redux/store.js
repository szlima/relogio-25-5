import {combineReducers, createStore} from 'redux';

import clockReducer from './reducers/clockReducer';

const indexReducer= combineReducers({clockReducer});
export default createStore(indexReducer);