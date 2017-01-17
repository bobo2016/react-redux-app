/* @flow */
'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RouterContext } from 'react-router'


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
    // ContainerTemplate.onEvent = this.onEvent.bind(this)
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

const mapStateToProps = (state: Object, routerContext: RouterContext) => {
  // console.log('ContainerTemplate mapStateToProps:')
  // console.log('  state: ', state)
  // console.log('  routerContext: ', routerContext)

  return {
    // main: state.main,
    // router: routerContext.router,
  }
}

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(ContainerTemplate)
