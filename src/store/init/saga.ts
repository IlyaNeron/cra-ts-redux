import { SagaIterator } from 'redux-saga'
import { takeEvery } from 'redux-saga/effects'
import { IReduxActionTypes } from './type'

export default function* watchFiles() {
  yield takeEvery(IReduxActionTypes.INCREMENT_COUNTER, initSaga)
}

function* initSaga(): SagaIterator {
  try {
    console.log('INCREMENT_COUNTER')
  } catch (error) {
    console.error(error)
  }
}
