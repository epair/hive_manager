import { configureStore } from '@reduxjs/toolkit'

import currentUserReducer from '../features/user/currentUserSlice'
import hivesReducer from '../features/hives/hivesSlice'
import inspectionsReducer from '../features/inspections/inspectionsSlice'
import alertReducer from '../features/alerts/reducer'

export default configureStore({
  reducer: {
    currentUser: currentUserReducer,
    hives: hivesReducer,
    inspections: inspectionsReducer,
    alerts: alertReducer
  }
})
