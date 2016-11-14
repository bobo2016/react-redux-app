/* @flow */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Home from './containers/Home'
import Login from './containers/Login'
import NoMatch from './containers/NoMatch'
import configureStore from './store/configureStore'

require('./stylesheets/utils/helpers.scss')


const store = configureStore()

// NOTE: hot reloading routes is not possible yet !
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)


// if (module.hot) {
//   (module.hot: any).accept()
// }


render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Home} />
      <Route path="login" component={Login} />
      <Route path="*" component={NoMatch} />
    </Router>
  </Provider>,
  document.getElementById('leinwand')
)
