/* @flow */
'use strict'

import type { Action } from '../actions/types'


type State = {
  id: number,
}


const initialState: State = {
  id: 0,
}


export default function mainReducer(
  state: State = initialState, action: Action
): State {
  switch (action.type) {
    case 'EXAMPLE_ACTION':
      return exampleAction(state, action)

    default:
      return state
  }
}


/// mainReducers

function exampleAction(state: State, action: Action): State {
  return {
    ...state,
    id: action.payload.id + 1,
  }
}
