/* @flow */
'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { exampleAction } from '../actions/main'

import type { Dispatch } from '../actions/types'

import Credits from '../components/Credits'

require('../stylesheets/containers/Login.scss')


type Props = {
  // props from app state
  id: number,
  dispatch: Dispatch,
}

type State = {
  // state
}


class Login extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    // this.state = {}

    const Login = (this: any)
    Login.handleExampleAction = this.handleExampleAction.bind(this)
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
      <div id="Login">
        <h1>Login</h1>

        <p className="link"><Link to="/">🏡</Link></p>

        <p>Member area</p>

        <Credits />
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
  // console.log('Login mapStateToProps:');
  // console.log('  state: ', state);
  // console.log('  router: ', router);

  return {
    id: state.main.id,
  }
}

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Login)
