import React, { useContext } from 'react';
import styled from 'styled-components';
import { DiagramContext } from '../../context';
import AxisItem from './AxisItem';

const Item = styled.div`
  grid-column: 1;
  grid-row: ${props => props.row};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5px;
`;

const TimeAxis = () => {
  const {
    timeAxis: { timeAxisArr },
  } = useContext(DiagramContext);

  return (
    <>
      {timeAxisArr &&
        timeAxisArr.map((item, i) => (
          <Item key={i}>
            <AxisItem name={item} />
          </Item>
        ))}
      <Item row="5/7">0</Item>
    </>
  );
};
export default TimeAxis;
