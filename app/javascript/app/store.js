import { configureStore } from '@reduxjs/toolkit'

import currentUserReducer from '../features/user/currentUserSlice'
import hivesReducer from '../features/hives/hivesSlice'

export default configureStore({
  reducer: {
    currentUser: currentUserReducer,
    hives: hivesReducer
  }
})
