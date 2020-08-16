import { useMemo, Dispatch } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators, Action } from 'redux'
import { AuthActions } from '../../store/init/type'

const useActions = (actions: any): any => {
  const dispatch = useDispatch()

  return useMemo(() => {
    const bindActions: any = {}
    Object.keys(actions).map((actionName: keyof typeof actions) => {
      const action = bindActionCreators(actions[actionName], dispatch)
      bindActions[actionName] = action
    })
    return bindActions
  }, [dispatch, actions])
}

export default useActions
