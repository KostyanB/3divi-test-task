import { configureStore } from '@reduxjs/toolkit';
import getDataReducer from './getDataSlice';
import devicesReducer from './devicesSlice';

export default configureStore({
  reducer: {
    getData: getDataReducer,
    devices: devicesReducer,
  },
});
