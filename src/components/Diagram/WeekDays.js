import React, { useCallback } from 'react';
import styled from 'styled-components';
import env from '../../env.json';

const { mainTextColor } = env.colors;

const Day = styled.div`
  grid-row: 6;
  grid-column: ${props => props.column};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-top: 2px solid ${mainTextColor};
`;

const WeekDays = () => {
  const weekDays = env.weekDays;

  const firstLetterUpper = useCallback(
    str => str.charAt(0).toUpperCase() + str.slice(1),
    [],
  );

  return (
    <>
      {weekDays.map((name, i) => (
        <Day key={`${name}-${i}`} column={i + 2}>
          {firstLetterUpper(name)}
        </Day>
      ))}
    </>
  );
};
export default WeekDays;
