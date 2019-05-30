import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

  const Reducers = combineReducers({
    trendings: () => ({ hashtags: [['#OneBitCode', '100k'], ['#RubyOnRails', '99k']] })
  });

  const Store = createStore(Reducers);

  ReactDOM.render(
    <Provider store={Store}>
      <App/>
    </Provider>
    , document.getElementById('root')
  );

  serviceWorker.unregister();