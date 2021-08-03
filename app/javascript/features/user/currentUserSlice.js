import { createSlice } from '@reduxjs/toolkit'

const initialState = { id: '1', email: 'test@test.com', isLoggedIn: false }

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    toggleLoggedIn(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn
    }
  }
})

export const { toggleLoggedIn } = currentUserSlice.actions

export default currentUserSlice.reducer
