/* @flow */
'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { exampleAction } from '../actions/main'

import type { Dispatch } from '../actions/types'

import Credits from '../components/Credits'
import ImageExample from '../components/ImageExample'

require('../stylesheets/containers/NoMatch.scss')


type Props = {
  // props from app state
  dispatch: Dispatch,
}

type State = {
  // state
}


class NoMatch extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    // this.state = {}

    // const NoMatch = (this: any)
    // NoMatch.handleExampleAction = this.handleExampleAction.bind(this)
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
      <div id="NoMatch">
        <h1>404: Whups, how did you get here ?!</h1>

        <ImageExample />

        <p><Link to="/">&lt; Go back</Link></p>

        <Credits />
      </div>
    )
  }


  /// Event Handlers
  // ...
}

export default NoMatch
