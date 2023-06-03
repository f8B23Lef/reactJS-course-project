import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import axios from 'axios';
import App from './App';
import './index.css';
import store from './store/index';
import { fetchMovies } from './store/moviesSlice';

axios.defaults.baseURL = 'http://localhost:4000';

store.dispatch(fetchMovies());

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

window.store = store;
