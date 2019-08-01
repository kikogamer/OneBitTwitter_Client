import { FETCH_TWEETS, DELETE_TWEET, ADD_TWEET, LIKE_TWEET, DISLIKE_TWEET, ADD_RETWEET, UPDATE_TWEET } from './constants';

// The initial state of the App
const initialState = { tweets: [] };

const updateTweetOnList = (state, payload) => {
  return state.map((tweet) => {
    if (tweet.id === payload.id) {
      tweet = payload
    }
    return tweet
  })
}

const updateRetweetList = (state, payload) => {
  return state.map((tweet) => {
    if (tweet.id === payload.tweet_original_id) {
      tweet.retweets_count++
    }
    return tweet
  })
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TWEETS:
      return action.payload
    case DELETE_TWEET:
      return state.filter(tweet => tweet.id !== action.payload)
    case ADD_TWEET:
      return [action.payload, ...state]
    case LIKE_TWEET:
      return updateTweetOnList(state, action.payload)
    case DISLIKE_TWEET:
      return updateTweetOnList(state, action.payload)
    case ADD_RETWEET:
      return updateRetweetList([action.payload, ...state], action.payload) 
    case UPDATE_TWEET:
      return updateTweetOnList(state, action.payload) 
    default:
      return state;
  }
}