import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', name: 'Home' },
  { id: '2', name: 'Cyndy & Larry' }
]

const hivesSlice = createSlice({
  name: 'hives',
  initialState,
  reducers: {}
})

export default hivesSlice.reducer
