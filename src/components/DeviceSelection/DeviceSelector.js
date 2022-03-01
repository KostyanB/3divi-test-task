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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  font-size: 14px;
  line-height: 16px;
  color: ${extraTextColor};
  cursor: pointer;

  &:hover {
    color: ${hoverColor};
    & > div > svg {
      color: ${hoverColor};
    }
  }
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
    <li>
      <Label htmlFor={inputName} title={selectorTitle} onClick={toggleSelect}>
        <input
          ref={selectRef}
          type="checkbox"
          form="dev-selectors"
          name={inputName}
          className="visually-hidden"
          aria-hidden="true"
          tabIndex="-1"
        />
        {deviceId}
        <SelectField isSelected={selectValue}>
          <CheckIcon name={deviceId} />
        </SelectField>
      </Label>
    </li>
  );
};
export default DeviceSelector;
