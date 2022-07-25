import MainReducer from '../reducers/index'
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
    MainReducer,
    undefined,
    compose(applyMiddleware(thunk)),
);

export default store
