/* @flow */
'use strict'

import type { Action } from './types'


type State = {
  id: number,
  color: string,
}


const initialState: State = {
  id: 0,
  color: '#0f0',
}


/// Reducer

export default function mainReducer(
  state: State = initialState, action: Action
): State {
  switch (action.type) {
    case 'EXAMPLE_ACTION':
      return exampleReducer(state, action)

    case 'COLOR_ACTION':
      return colorReducer(state, action)

    default:
      return state
  }
}


function exampleReducer(state, action) {
  return {
    ...state,
    id: action.payload.id,
  }
}


function colorReducer(state, action) {
  return {
    ...state,
    color: action.payload.color,
  }
}


/// Action Creators

export function exampleAction(id: number): Action {
  return {
    type: 'EXAMPLE_ACTION',
    payload: {
      id
    }
  }
}

export function colorAction(color: string): Action {
  return {
    type: 'COLOR_ACTION',
    payload: {
      color
    }
  }
}
