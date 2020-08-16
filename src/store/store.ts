import createSagaMiddleware from 'redux-saga'
import { combineReducers, createStore, applyMiddleware } from 'redux'

import rootSaga from './saga'
import { counterReducer } from './init'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  count: counterReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
