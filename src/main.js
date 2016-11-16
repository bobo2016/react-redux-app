/* @flow */

import React, { Component } from 'react'
import { render } from 'react-dom'

import configureStore from './store/configureStore'

import App from './containers/App'

require('./stylesheets/utils/helpers.scss')


const store = configureStore()


if (module.hot) {
  (module.hot: any).accept()
}


render(
  <App store={store} />,
  document.querySelector('#leinwand')
)
