import API from '../../../api.js';
import { logIn } from '../SignInContainer/actions.js';

export function register({ name, email, password }) {
  const params = { "user": { name, email, password } }
  const request = API.post('/users', params);

  return (dispatch) => {
    request.then(
      resp => {
        dispatch(logIn({ email, password }))
      },
      error => {
        window.Materialize.toast('User or password invalid', 4000, 'red')
      }
    );
  };
}