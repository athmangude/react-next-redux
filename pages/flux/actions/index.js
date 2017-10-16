import * as AppActionTypes from '../constants';

export function updateAppState(loaded) {
  return {
    type: AppActionTypes.APP_STATUS_CHANGED,
    loaded,
  }
}
