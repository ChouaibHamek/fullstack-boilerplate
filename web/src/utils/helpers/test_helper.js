/* eslint-disable react/no-find-dom-node, function-paren-newline,
react/jsx-filename-extension, import/no-extraneous-dependencies */
import _$ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { initialize, addTranslationForLanguage } from 'react-localize-redux';
import reducers from '../reducers';

require.extensions['.png'] = () => null;

const englishJSON = require('../../constants/localization/english.json');
const jsdom = require('jsdom');

const languages = ['en'];
const { JSDOM } = jsdom;
const middlewares = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;

// global.document = (new JSDOM('<!doctype html><html><body></body></html>')).window
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
const $ = _$(window);

chaiJquery(chai, chai.util, $);

function renderComponent(ComponentClass, props = {}, state = {}) {
  const store = createStore(reducers, state, enhancer);
  // add supported languages to the store
  store.dispatch(initialize(languages));
  // add translations
  store.dispatch(addTranslationForLanguage(englishJSON, 'en'));
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider
      store={store}
    >
      <ComponentClass {...props} />
    </Provider>);
  return $(ReactDOM.findDOMNode(componentInstance));
}

$.fn.simulate = (eventName, value) => {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

export { renderComponent, expect };
