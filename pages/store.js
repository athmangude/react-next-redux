import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createReducer from './reducers';

export default function configureStore() {
  const middlewares = [thunkMiddleware]

  const enhancers = [
    applyMiddleware(...middlewares),
  ]

  const store = createStore(
    createReducer,
    undefined,
    compose(...enhancers)
  );

  return store;
}
