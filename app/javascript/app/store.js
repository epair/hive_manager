import { configureStore as createStore } from '@reduxjs/toolkit'
import throttle from 'lodash/throttle'
import { loadState, saveState } from './localStorage'

import currentUserReducer from '../features/user/currentUserSlice'
import hivesReducer from '../features/hives/hivesSlice'
import inspectionsReducer from '../features/inspections/inspectionsSlice'
import alertReducer from '../features/alerts/reducer'

const configureStore = () => {
  const preloadedState = loadState()
  const store = createStore({
    reducer: {
      currentUser: currentUserReducer,
      hives: hivesReducer,
      inspections: inspectionsReducer,
      alerts: alertReducer
    },
    preloadedState
  })

  store.subscribe(throttle(() => {
    saveState(store.getState())
  }, 1000))

  return store
}

export default configureStore
