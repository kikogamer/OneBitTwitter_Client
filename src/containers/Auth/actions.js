import API from '../../api.js';
import { UPDATE_CURRENT_USER } from './constants';

export function getCurrentUser() {
  const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
  const request = API.get('/users/current', { headers: headers });

  return (dispatch) => {
    request.then(
      resp => {
        dispatch({ type: UPDATE_CURRENT_USER, payload: resp.data })
      },
      error => {
        // dispatch(logOut());
        console.log('LogOut')
      }
    );
  };
}