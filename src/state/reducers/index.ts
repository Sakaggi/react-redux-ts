import { combineReducers } from 'redux';

import lifeEventReducer from './lifeEventReducer'

const reducers = combineReducers({
    lifeEvents: lifeEventReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;