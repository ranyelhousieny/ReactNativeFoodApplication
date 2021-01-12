import { reducer } from './Reducers/rootReducer'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// 2. Create the store
export const store = createStore( reducer, applyMiddleware(thunk) );












