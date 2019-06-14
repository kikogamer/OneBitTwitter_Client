import API from '../../api.js';
import { DELETE_TWEET } from './constants';

export function deleteTweet(id) {
  const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
  const request = API.delete(`/tweets/${id}`, { headers: headers });

  return (dispatch) => {
    request.then(
      resp => dispatch({ type: DELETE_TWEET, payload: id }),
      error => window.Materialize.toast('Problem in delete Tweet', 4000, 'red')
    )
  };
}