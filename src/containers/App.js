/* @flow */
'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { exampleAction } from '../actions/main'

import type { Dispatch } from '../actions/types'

import Button from '../components/Button'

require('../stylesheets/containers/App.scss')


type Props = {
  // props from app state
  id: number,
  dispatch: Dispatch,
}

type State = {
  // state
}


class App extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    // this.state = {}

    const App = (this: any)
    App.handleExampleAction = this.handleExampleAction.bind(this)
  }

  /* Component Lifecycle */

  /// Mounting
  // componentWillMount() {}
  // componentDidMount() {}
  // componentWillUnmount() {}

  /// Updating
  // componentWillReceiveProps(nextProps: Props) {}
  // shouldComponentUpdate(nextProps: Props, nextState: State) {}
  // componentWillUpdate(nextProps: Props, nextState: State) {}
  // componentDidUpdate(prevProps: Props, prevState: State) {}


  render() {
    return (
      <div id="App">
        <h1>Welcome to your awesome react-redux app !</h1>

        <Button
          onClick={this.handleExampleAction}
          id={this.props.id}
        />

        <p>&nbsp;</p>
        <p>Humbly presented by <a href="https://github.com/leinwand" target="_blank">LEINWAND</a></p>
      </div>
    )
  }


  /// Event Handlers

  handleExampleAction() {
    const { dispatch, id } = this.props

    dispatch( exampleAction(id) )
  }
}

const mapStateToProps = (state: Object, router: Object) => {
  // console.log('App mapStateToProps:');
  // console.log('  state: ', state);
  // console.log('  router: ', router);

  return {
    id: state.main.id,
  }
}

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(App)
