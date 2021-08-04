import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'

import { client } from '../../api/client'

const initialState = {
  user: {},
  isLoggedIn: false,
  status: 'idle',
  error: null,
}

export const login = createAsyncThunk(
  'currentUser/login', 
  async (params) => {
    const response = await client.post('/api/login', { user: params })
    return response.user
  }
)

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    logout(state, _) {
      state.isLoggedIn = false
    }
  },
  extraReducers: {
    [login.pending]: (state, _) => {
      state.status = 'pending'
    },
    [login.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.isLoggedIn = true
      state.user = action.payload
    },
    [login.rejected]: (state, action) => {
      state.status = 'failed'
      state.isLoggedIn = false
      state.error = action.error
    },
  }
})

export const { logout } = currentUserSlice.actions

export default currentUserSlice.reducer
