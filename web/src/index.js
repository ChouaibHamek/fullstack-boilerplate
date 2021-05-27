/* eslint-disable react/jsx-filename-extension, no-console,
import/no-extraneous-dependencies, global-require */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './semantic/dist/semantic.min.css';
import './global-style.css';
import configureStore from './utils/configure_store';

const store = configureStore();

const rootEl = document.getElementById('root');
const DEV = process.env.NODE_ENV === 'development';

let render = () => {
  const App = require('./components/app_main/app.jsx').default;
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl,
  );
};

if (module.hot && DEV) {
  const RedBox = require('redbox-react').default;
  const renderApp = render;
  const renderError = (error) => {
    ReactDOM.render(
      <RedBox error={error} />,
      rootEl,
    );
  };
  render = () => {
    try {
      renderApp();
    } catch (error) {
      console.error(error);
      renderError(error);
    }
  };
  module.hot.accept('./components/app_main/app_main.jsx', () => {
    setTimeout(render);
  });
}

render();
