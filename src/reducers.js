import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import TrendingTopicsReducer from './containers/TrendingTopicsContainer/reducer.js';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  trendings: TrendingTopicsReducer
});

export default rootReducer;