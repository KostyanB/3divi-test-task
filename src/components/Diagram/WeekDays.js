import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';

const { mainTextColor } = env.colors;

const Day = styled.div`
  grid-row: 5;
  grid-column: ${props => props.column};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-top: 2px solid ${mainTextColor};
`;

const WeekDays = () => {
  const weekDays = env.weekDays;

  return (
    <>
      {weekDays.map((name, i) => (
        <Day key={i} column={i + 2}>
          {name}
        </Day>
      ))}
    </>
  );
};
export default WeekDays;
