import { UPDATE_TRENDINGS } from './constants';

// The initial state of the App
const initialState = { hashtags: [] };

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_TRENDINGS:
      return { ...state, hashtags: action.payload.hashtags }
    default:
      return state;
  }
}