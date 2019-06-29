import { UPDATE_USER_INFO, USER_FOLLOW } from './constants';

// The initial state of the App
const initialState = { user: {} };

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return action.payload
    case USER_FOLLOW:
      return action.payload
    default:
      return state;
  }
}