import { IReduxActionTypes } from './type'
import { action } from 'typesafe-actions'

export const increment = () => action(IReduxActionTypes.INCREMENT_COUNTER)
export const decrement = () => action(IReduxActionTypes.DECREMENT_COUNTER)
