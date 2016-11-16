import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Home from './Home'
import Login from './Login'
import NoMatch from './NoMatch'


type Props = {
  store: Object,
}

type State = {
  router: Object,
}


class App extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    // Create an enhanced history that syncs navigation events with the store
    const history = syncHistoryWithStore(browserHistory, props.store)

    this.state = {
      router: (
        <Router history={history}>
          <Route path="/" component={Home} />
          <Route path="login" component={Login} />
          <Route path="*" component={NoMatch} />
        </Router>
      )
    }
  }

  render() {
    return (
      <Provider store={this.props.store}>
         {this.state.router}
      </Provider>
    )
  }
}

export default App
