import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const initialState = {
  hives: [],
  status: 'idle',
  error: null
}

export const fetchHives = createAsyncThunk('hives/fetchHives', async () => {
  const response = await client.get('/api/hives')
  return response.hives
})

const hivesSlice = createSlice({
  name: 'hives',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchHives.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchHives.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.hives = state.hives.concat(action.payload)
    },
    [fetchHives.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error
    },
  }
})

export default hivesSlice.reducer
