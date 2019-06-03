import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'
import thunk from 'redux-thunk';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    devtools,
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunk
        // ... other middlewares ...
      ),
    ),
  )

  return store
}