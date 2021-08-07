import { configureStore } from '@reduxjs/toolkit'

import currentUserReducer from '../features/user/currentUserSlice'
import hivesReducer from '../features/hives/hivesSlice'
import inspectionsReducer from '../features/inspections/inspectionsSlice'

export default configureStore({
  reducer: {
    currentUser: currentUserReducer,
    hives: hivesReducer,
    inspections: inspectionsReducer
  }
})
