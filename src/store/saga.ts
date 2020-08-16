import { call, all, spawn } from 'redux-saga/effects'
import watchFiles from './init/saga'

export default function* rootSaga() {
  const sagas = [watchFiles]

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
