import API from '../../api.js';
import { UPDATE_USER_INFO } from '../UserInfoContainer/constants';
import { FETCH_TWEETS, FETCH_MORE_TWEETS } from '../TweetListContainer/constants';

export function setUserInfo(user) {
  return ({ type: UPDATE_USER_INFO, payload: user });
}

export function getTimeline(page = 1) {
  const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
  const request = API.get(`/timeline?page=${page}`, { headers: headers });

  return (dispatch) => {
    request.then(
      resp => dispatch({
        type: (page > 1 ? FETCH_MORE_TWEETS : FETCH_TWEETS),
        payload: resp.data
      }),
      error => window.Materialize.toast('Problem in get Timeline', 4000, 'red')
    )
  };
}