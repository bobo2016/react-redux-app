/* @flow */
'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'


type Props = {
  // props
}

type State = {
  // state
}


class ContainerTemplate extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    // this.state = {}

    // const ContainerTemplate = (this: any)
    // ContainerTemplate.eventHandler = this.eventHandler.bind(this)
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
    return <div>ContainerTemplate</div>
  }


  /// Event Handlers
  // ...
}

const mapStateToProps = (state: Object, router: Object) => {
  // console.log('ContainerTemplate mapStateToProps:');
  // console.log('  state: ', state);
  // console.log('  router: ', router);

  return {
    // main: state.main
  }
}

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(ContainerTemplate)
