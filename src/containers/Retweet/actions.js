import API from '../../api.js';
import { ADD_RETWEET } from '../TweetListContainer/constants'

export function createRetweet(body, tweet_original_id) {
  const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
  const request = API.post(`/tweets`,
    { body: body, tweet_original_id: tweet_original_id },
    { headers: headers });

  return (dispatch) => {
    request.then(
      resp => dispatch({ type: ADD_RETWEET, payload: resp.data }),
      error => window.Materialize.toast('Problem in create retweet', 4000, 'red')
    )
  };
}