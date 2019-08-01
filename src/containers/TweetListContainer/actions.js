import API from '../../api.js';
import { DELETE_TWEET, ADD_TWEET, UPDATE_TWEET } from './constants';

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

export function createTweet(body) {
  const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
  const request = API.post(`/tweets`, { body: body }, { headers: headers });

  return (dispatch) => {
    request.then(
      resp => dispatch({ type: ADD_TWEET, payload: resp.data }),
      error => window.Materialize.toast('Problem in create Tweet', 4000, 'red')
    )
  };
}

export function updateTweet(id, body) {
  const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
  const request = API.put(`/tweets/${id}`, { body: body }, { headers: headers });

  return (dispatch) => {
    request.then(
      resp => dispatch({ type: UPDATE_TWEET, payload: resp.data }),
      error => window.Materialize.toast('Problem in update Tweet', 4000, 'red')
    )
  }
}