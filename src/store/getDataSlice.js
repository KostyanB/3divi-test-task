import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getData = createAsyncThunk(
  'getData/fetchDb',
  async function (dbUrl, { rejectWithValue }) {
    try {
      const response = await fetch(dbUrl);
      if (!response.ok) throw new Error('Server error');
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getDataSlice = createSlice({
  name: 'getData',
  initialState: {
    data: {},
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getData.pending]: state => {
      state.status = 'loading';
      state.error = null;
    },
    [getData.fulfilled]: (state, action) => {
      state.status = 'success';
      state.data = action.payload;
    },
    [getData.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export const selectData = state => state.getData.data;
export const selectError = state => state.getData.error;
export const selectStatus = state => state.getData.status;

export default getDataSlice.reducer;
