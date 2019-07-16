import Api from "../../api";
import { USER_UNFOLLOW } from '../UserInfoContainer/constants';

export function unfollow(id) {
  const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
  const request = Api.delete(`/users/${id}/follow`, { headers: headers });

  return (dispatch) => {
    request.then(
      resp => dispatch({ type: USER_UNFOLLOW, payload: resp.data }),
      error => window.Materialize.toast('Problem in unfollow user', 4000, 'red')
    )
  }
}