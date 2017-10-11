import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createReducer from './reducers';

export default function configureStore() {
  const middlewares = [thunkMiddleware];

  const reduxDevtools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__() && window.__REDUX_DEVTOOLS_EXTENSION__();
  const enhancers = [
    applyMiddleware(...middlewares),
    // reduxDevtools
  ]

  const store = createStore(
    createReducer,
    undefined,
    compose(...enhancers)
  );

  return store;
}
