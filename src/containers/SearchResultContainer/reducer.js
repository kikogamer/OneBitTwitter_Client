import { QUERY_RESULTS } from './constants';

// The initial state of the App
const initialState = { query_results: {} };

export default function (state = initialState, action) {
  switch (action.type) {
    case QUERY_RESULTS:
      return action.payload
    default:
      return state;
  }
}