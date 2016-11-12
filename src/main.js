/* @flow */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import App from './containers/App'
import configureStore from './store/configureStore'

require('./stylesheets/base/general.scss')


const store = configureStore()


if (module.hot) {
  module.hot.accept();
}


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('leinwand')
)
