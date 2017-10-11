import * as AppActionTypes from '../constants';

export function updateAppState(change) {
  return {
    type: AppActionTypes.APP_STATUS_CHANGED,
    change,
  }
}
