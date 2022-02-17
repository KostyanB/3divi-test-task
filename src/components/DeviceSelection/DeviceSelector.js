import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import env from '../../env.json';

import { CheckIcon } from '../Icons';

const {
  transitionDuration,
  colors: { hoverColor, extraTextColor },
} = env;

const Label = styled.label`
  position: relative;
  display: grid;
  align-items: center;
  padding: 6px 10px;
  height: 30px;
  cursor: pointer;

  &:hover {
    & > div > span,
    & > div > div > svg {
      color: ${hoverColor};
    }
  }

  & > input {
    grid-area: 1/-1;
    place-self: end;
    width: 30px;
    height: 30px;
    z-index: -5;
  }
`;
const Select = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  grid-area: 1/-1;
  place-self: start;

  & > span {
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: ${extraTextColor};
  }
`;
const SelectField = styled.div`
  width: 30px;
  height: 30px;
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

const DeviceSelector = ({ deviceId }) => {
  const [isSelected, setIsSelected] = useState(false);
  const selectRef = useRef(null);
  const inputName = `dev-selector-${deviceId}`;
  const selectorTitle = `Выбрать устройство ${deviceId}`;

  const toggleSelect = useCallback(() => {
    const newSelect = !selectRef.current.checked;
    setIsSelected(newSelect);
    selectRef.current.checked = newSelect;
  }, [selectRef]);

  return (
    <Label htmlFor={inputName} title={selectorTitle} onClick={toggleSelect}>
      <input
        ref={selectRef}
        type="checkbox"
        form="dev-selectors"
        name={inputName}
      />
      <Select>
        <span>{deviceId}</span>
        <SelectField isSelected={isSelected}>
          <CheckIcon name={deviceId} />
        </SelectField>
      </Select>
    </Label>
  );
};
export default DeviceSelector;
