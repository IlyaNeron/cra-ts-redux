import { ActionType } from 'typesafe-actions'

import * as actions from './action'

export enum IReduxActionTypes {
  INCREMENT_COUNTER = 'INCREMENT_COUNTER',
  DECREMENT_COUNTER = 'DECREMENT_COUNTER'
}

export interface IReduxBaseAction {
  type: IReduxActionTypes
}

export interface IReduxDecrementCounter extends IReduxBaseAction {
  type: IReduxActionTypes.DECREMENT_COUNTER
}

export interface IReduxIncrementCounter extends IReduxBaseAction {
  type: IReduxActionTypes.INCREMENT_COUNTER
}

export type ICounterReducerActions =
  | IReduxDecrementCounter
  | IReduxIncrementCounter

export interface SystemState {
  count: {
    value: number
  }
}

export type AuthActions = typeof actions

export type RootAction = AuthActions
