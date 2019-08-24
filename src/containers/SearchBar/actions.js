import axios from 'axios';
import { UPDATE_SEARCH_LIST } from './constants';

export function getSearchList(query) {
  const request = axios.get(process.env.REACT_APP_API + '/autocomplete?query='+ query);

  return (dispatch) => {
    request.then(
      resp => dispatch({ type: UPDATE_SEARCH_LIST, payload: resp.data }),
      error => window.Materialize.toast('Fetch error', 4000, 'red')
    )
  }
}