/* @flow */
'use strict'

import React, { Component } from 'react'


type Props = {
  // props
}

type State = {
  // state
}


class ComponentTemplate extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    // this.state = {}

    // const ComponentTemplate = (this: any)
    // ComponentTemplate.onEvent = this.onEvent.bind(this)
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
    return <div>ComponentTemplate</div>
  }


  /// Event Handlers
  // ...
}

export default ComponentTemplate
