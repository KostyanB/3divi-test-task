import React, { useContext } from 'react';
import styled from 'styled-components';
import { DiagramContext } from '../../context';
import ScaleItem from './ScaleItem';

const Item = styled.div`
  grid-column: 1;
  grid-row: ${props => props.row};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5px;
`;

const TimeScale = () => {
  const {
    timeScale: { timeScaleArr },
  } = useContext(DiagramContext);

  return (
    <>
      {timeScaleArr &&
        timeScaleArr.map((item, i) => (
          <Item key={`${item}-${i}`}>
            <ScaleItem name={item} />
          </Item>
        ))}
      <Item row="5/7">0</Item>
    </>
  );
};
export default TimeScale;
