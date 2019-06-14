import { FETCH_TWEETS, DELETE_TWEET } from './constants';

// The initial state of the App
const initialState = { tweets: [] };

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TWEETS:
      return action.payload
    case DELETE_TWEET:
      return state.filter(tweet => tweet.id !== action.payload)
    default:
      return state;
  }
}