import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createReducer from './reducers';

export default function configureStore() {
  const middlewares = [thunkMiddleware];

  const enhancers = [
    applyMiddleware(...middlewares)
  ]

  const store = createStore(
    createReducer,
    undefined,
    composeWithDevTools(...enhancers)
  );

  return store;
}
