/* @flow */
'use strict'

import React, { Component } from 'react'

require('../stylesheets/components/ExampleButton.scss')


type Props = {
  id: number,
  onClick: () => void
}

type State = {
  // state
}


class ExampleButton extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    // this.state = {}

    // const ExampleButton = (this: any)
    // ExampleButton.eventHandler = this.eventHandler.bind(this)
  }

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
    const { id, onClick } = this.props

    return <button onClick={onClick}>Example Action ({id})</button>
  }


  /// Event Handlers
  // ...
}

export default ExampleButton