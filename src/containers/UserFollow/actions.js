import Api from "../../api";
import { USER_FOLLOW } from '../UserInfoContainer/constants';

export function follow(id) {
  const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
  const request = Api.post(`/users/${id}/follow`, { id: id }, { headers: headers });

  return (dispatch) => {
    request.then(
      resp => dispatch({ type: USER_FOLLOW, payload: resp.data }),
      error => window.Materialize.toast('Problem in follow user', 4000, 'red')
    )
  }
}