import Api from "../../api";
import { DISLIKE_TWEET } from '../TweetListContainer/constants';

export function dislike(id) {
  const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
  const request = Api.delete(`/tweets/${id}/like`, { headers: headers });
  
  return (dispatch) => {
    request.then(
      resp => dispatch({ type: DISLIKE_TWEET, payload: resp.data }),
      error => window.Materialize.toast('Problem in dislike tweet', 4000, 'red')
    )
  }
}