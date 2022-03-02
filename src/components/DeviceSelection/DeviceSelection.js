import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectSelectedDevices } from '../../store/devicesSlice';
import env from '../../env.json';

import DeviceSelector from './DeviceSelector';
import { Title2 } from '../Styled/Titles';

const scrollColor = env.colors.extraTextColor;

const Wrapper = styled.div`
  width: 130px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px 10px 5px 0px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${scrollColor};
    border-radius: 100px;
  }
`;

const DeviceSelection = () => {
  const selectedDevices = useSelector(selectSelectedDevices);

  return (
    <>
      <Wrapper>
        <Title2 text="Devices ID" />
        <ul>
          {selectedDevices &&
            Object.entries(selectedDevices).map(([id, value]) => (
              <DeviceSelector key={id} deviceId={id} selectValue={value} />
            ))}
        </ul>
      </Wrapper>
    </>
  );
};
export default DeviceSelection;
