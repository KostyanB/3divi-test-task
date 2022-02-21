import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { useDispatch } from 'react-redux';
import { toggleSelectedDevice } from '../../store/devicesSlice';

import { CheckIcon } from '../Icons';

const {
  transitionDuration,
  colors: { hoverColor, extraTextColor },
} = env;

const Label = styled.label`
  position: relative;
  display: grid;
  align-items: center;
  padding: 5px 10px;
  height: 30px;
  cursor: pointer;

  &:hover {
    & > div,
    & > div > div > svg {
      color: ${hoverColor};
    }
  }

  & > input {
    grid-area: 1/-1;
    place-self: center end;
    width: 20px;
    height: 20px;
    z-index: -1;
    cursor: pointer;
  }
`;
const Select = styled.div`
  grid-area: 1/-1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
  font-size: 14px;
  line-height: 16px;
  color: ${extraTextColor};
`;
const SelectField = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${extraTextColor};

  & > svg {
    transform: ${props => (props.isSelected ? 'scale(1)' : 'scale(0)')};
    transition: transform ${transitionDuration};
  }
`;

const DeviceSelector = ({ deviceId, selectValue }) => {
  const dispatch = useDispatch();
  const selectRef = useRef(null);
  const inputName = `dev-selector-${deviceId}`;
  const selectorTitle = `Выбрать устройство ${deviceId}`;

  const toggleSelect = useCallback(() => {
    selectRef.current.checked = !selectValue;
    dispatch(toggleSelectedDevice(deviceId));
  }, [selectRef, deviceId, selectValue, dispatch]);

  return (
    <Label htmlFor={inputName} title={selectorTitle} onClick={toggleSelect}>
      <input
        ref={selectRef}
        type="checkbox"
        form="dev-selectors"
        name={inputName}
      />
      <Select>
        {deviceId}
        <SelectField isSelected={selectValue}>
          <CheckIcon name={deviceId} />
        </SelectField>
      </Select>
    </Label>
  );
};
export default DeviceSelector;
