import { UPDATE_SEARCH_LIST } from './constants';

// The initial state of the App
const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_SEARCH_LIST:
      return action.payload.map((item, i) => { return {label: item, key: i} })
    default:
      return state;
  }
}