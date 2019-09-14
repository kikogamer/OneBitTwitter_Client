import { SEARCH_QUERY } from './constants';

// The initial state of the App
const initialState = '';

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_QUERY:
      return action.payload
    default:
      return state;
  }
}