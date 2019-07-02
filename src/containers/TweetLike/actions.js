import Api from "../../api";
import { LIKE_TWEET } from '../TweetListContainer/constants';

export function like(id) {
  const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
  const request = Api.post(`/tweets/${id}/like`, { id: id }, { headers: headers });

  return (dispatch) => {
    request.then(
      resp => dispatch({ type: LIKE_TWEET, payload: resp.data }),
      error => window.Materialize.toast('Problem in like tweet', 4000, 'red')
    )
  }
}