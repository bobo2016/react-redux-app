/* @flow */
'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { colorAction } from '../actions/main'

import type { Dispatch } from '../actions/types'

import ColorButton from '../components/ColorButton'
import Credits from '../components/Credits'

require('../stylesheets/containers/Login.scss')


type Props = {
  // props from app state
  color: string,
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
    Login.handleColorAction = this.handleColorAction.bind(this)
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

        <ColorButton
          color={this.props.color}
          onClick={this.handleColorAction}
        />

        <Credits />
      </div>
    )
  }


  /// Event Handlers

  handleColorAction() {
    const { dispatch, color } = this.props

    const newColor = color === '#0f0' ? '#f00' : '#0f0'

    dispatch( colorAction(newColor) )
  }
}

const mapStateToProps = (state: Object, router: Object) => {
  return {
    color: state.main.color,
  }
}

export default connect(
  mapStateToProps
)(Login)
