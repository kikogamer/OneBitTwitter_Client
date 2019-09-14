import API from '../../api.js';
import { QUERY_RESULTS } from './constants'

export function getQueryResult(query) {
  const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
  const request = API.get(`/search?query=${query}`, { headers: headers });

  return (dispatch) => {
    request.then(
      resp => dispatch({ type: QUERY_RESULTS, payload: resp.data }),
      error => window.Materialize.toast('Problem in execute search', 4000, 'red')
    )
  };
}