import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getData } from './getDataSlice';

const devicesAdapter = createEntityAdapter({
  selectId: device => device.n,
});

const devicesSlice = createSlice({
  name: 'devices',
  initialState: devicesAdapter.getInitialState(),
  extraReducers: {
    [getData.fulfilled]: (state, action) => {
      devicesAdapter.setAll(state, action.payload.data.o);
    },
  },
});

export const {
  selectById: selectDevicesById,
  selectIds: selectDevicesIds,
  selectEntities: selectDevicesEntities,
  selectAll: selectAllDevices,
  selectTotal: selectTotalDevices,
} = devicesAdapter.getSelectors(state => state.devices);

export default devicesSlice.reducer;
