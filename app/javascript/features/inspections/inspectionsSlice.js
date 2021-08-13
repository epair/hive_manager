import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const initialState = {
  inspections: [],
  status: 'idle',
  error: null
}

export const fetchInspections = createAsyncThunk('inspections/fetchInspections', async () => {
  const response = await client.get('/api/inspections')
  return response.inspections
})

export const addNewInspection = createAsyncThunk(
  'inspections/addNewInspection',
  async initialInspection => {
    const response = await client.post('/api/inspections', { inspection: initialInspection })
    return response.inspection
  }
)

const inspectionsSlice = createSlice({
  name: 'inspections',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchInspections.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchInspections.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.inspections = state.inspections.concat(action.payload)
    },
    [fetchInspections.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error
    },
    [addNewInspection.fulfilled]: (state, action) => {
      state.inspections.push(action.payload)
    }
  }
})

export default inspectionsSlice.reducer

export const selectInspectionsByHive = (state, hiveId) =>
  state.inspections.inspections.filter((i) => `${i.hive_id}` === hiveId)

