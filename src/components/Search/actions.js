import { SEARCH_QUERY } from './constants'
import { push } from 'react-router-redux'
import Store from './../../configureStore'

export const setSearchValue = (query) => {
  return (dispatch) =>
    dispatch({ type: SEARCH_QUERY, payload: query })
}

export const executeQuery  = () => {
  const query = Store.getState().search_value
  return (dispatch) =>  
    dispatch(push('/search/'+ query))
}