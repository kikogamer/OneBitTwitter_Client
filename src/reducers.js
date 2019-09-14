import { combineReducers } from 'redux';
import TrendingTopicsReducer from './containers/TrendingTopicsContainer/reducer.js';
import CurrentUserReducer from './containers/Auth/reducer.js';
import ImagePreviewReducer from './containers/ProfileEditContainer/reducer.js';
import UserInfoReducer from './containers/UserInfoContainer/reducer.js';
import TweetListReducer from './containers/TweetListContainer/reducer.js';
import SearchBarReducer from './containers/SearchBar/reducer.js'
import SearchReducer from './components/Search/reducer.js'
import QueryResultReducer from './containers/SearchResultContainer/reducer'

const rootReducer = combineReducers({
  trendings: TrendingTopicsReducer,
  current_user: CurrentUserReducer,
  image_preview: ImagePreviewReducer,
  user: UserInfoReducer,
  tweets: TweetListReducer,
  search_list: SearchBarReducer,
  search_value: SearchReducer,
  query_results: QueryResultReducer
});

export default rootReducer;