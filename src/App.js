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

function App({ dbUrl }) {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const status = useSelector(selectStatus);
  const data = useSelector(selectData);
  console.log('data: ', data);

  const devicesIds = useSelector(selectDevicesIds);
  console.log('devicesIds: ', devicesIds);
  const devicesEntities = useSelector(selectDevicesEntities);
  console.log('devicesEntities: ', devicesEntities);
  const allDevices = useSelector(selectAllDevices);
  console.log('allDevices: ', allDevices);
  const totalDevices = useSelector(selectTotalDevices);
  console.log('totalDevices: ', totalDevices);

  useEffect(() => {
    dispatch(getData(dbUrl));
  }, [dispatch, dbUrl]);

  return (
    <Suspense fallback={<Preloader />}>
      <GlobalStyle />
      <div>work</div>
    </Suspense>
  );
}
export default App;
