import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as StartupReducer } from './Startup/Reducers'

export default () => {
  const rootReducer = combineReducers({
    startup: StartupReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
