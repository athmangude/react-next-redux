import * as AppActionTypes from '../constants';

const initialState = {
  appName: 'Smala Dashboards',
  loaded: false,
}

const actionsMap = {
  [AppActionTypes.APP_STATUS_CHANGED](state, action) {
    return Object.assign({}, state, { loaded: action.loaded });
  }
}

export default function app(state = initialState, action) {
  const reduceFunction = actionsMap[action.type];
  if (reduceFunction) {
    return reduceFunction(state, action);
  }
  return state;
}
