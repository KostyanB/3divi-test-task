import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getData } from './getDataSlice';

const initDeviceSelection = false;

const devicesAdapter = createEntityAdapter({
  selectId: device => device.n,
  selectedDevices: {},
});

const devicesSlice = createSlice({
  name: 'devices',
  initialState: devicesAdapter.getInitialState(),
  reducers: {
    toggleSelectedDevice: (state, action) => {
      const id = action.payload;
      state.selectedDevices[id] = !state.selectedDevices[id];
    },
  },
  extraReducers: {
    [getData.fulfilled]: (state, action) => {
      const data = action.payload.data.o;
      devicesAdapter.setAll(state, data);
      data.forEach(item => {
        const deviceId = item.n;
        const selection = {};
        selection[deviceId] = initDeviceSelection;
        state.selectedDevices = {
          ...state.selectedDevices,
          ...selection,
        };
      });
    },
  },
});

export const { toggleSelectedDevice } = devicesSlice.actions;

export const {
  selectById: selectDevicesById,
  selectIds: selectDevicesIds,
  selectEntities: selectDevicesEntities,
  selectAll: selectAllDevices,
  selectTotal: selectTotalDevices,
} = devicesAdapter.getSelectors(state => state.devices);

export const selectSelectedDevices = state => state.devices.selectedDevices;

export default devicesSlice.reducer;
