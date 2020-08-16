import { ICounterReducerActions, IReduxActionTypes } from './type'

const initialState = {
  value: 0
}

export default (state = initialState, action: ICounterReducerActions) => {
  switch (action.type) {
    case IReduxActionTypes.INCREMENT_COUNTER:
      return { ...state, value: state.value + 1 }
    case IReduxActionTypes.DECREMENT_COUNTER:
      return { ...state, value: state.value - 1 }
    default:
      return state
  }
}
