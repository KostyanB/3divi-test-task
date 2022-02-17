import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectDevicesIds } from '../../store/devicesSlice';

import DeviceSelector from './DeviceSelector';

const DeviceSelection = () => {
  const devicesIds = useSelector(selectDevicesIds);
  console.log('devicesIds: ', devicesIds);

  return devicesIds.map((item, i) => (
    <DeviceSelector key={i} deviceId={item} />
  ));
};
export default DeviceSelection;
