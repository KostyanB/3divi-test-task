import React, { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getData,
  selectStatus,
  selectError,
  selectData,
} from './store/getDataSlice';
import {
  selectDevicesIds,
  selectDevicesEntities,
  selectAllDevices,
  selectTotalDevices,
} from './store/devicesSlice.js';

import { GlobalStyle } from './components/Styled/GlobalStyle';
import Preloader from './components/Styled/Preloader';
import DeviceSelection from './components/DeviceSelection';

function App({ dbUrl }) {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const status = useSelector(selectStatus);

  const devicesIds = useSelector(selectDevicesIds);
  const devicesEntities = useSelector(selectDevicesEntities);
  const allDevices = useSelector(selectAllDevices);
  const totalDevices = useSelector(selectTotalDevices);

  useEffect(() => {
    dispatch(getData(dbUrl));
  }, [dispatch, dbUrl]);

  return (
    <Suspense fallback={<Preloader />}>
      <GlobalStyle />
      <DeviceSelection />
    </Suspense>
  );
}
export default App;
