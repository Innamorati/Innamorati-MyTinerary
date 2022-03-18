import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReducerPrincipal from './redux/reducers/ReducerPrincipal';

const reduxStore = createStore(ReducerPrincipal, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
