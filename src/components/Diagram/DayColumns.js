import React, { useContext, useCallback } from 'react';
import styled from 'styled-components';
import { DiagramContext } from '../../context';
import DayDiagram from '../DayDiagram';

const Wrapper = styled.div`
  place-self: end center;
  grid-column: ${props => props.column};
  grid-row: 1/6;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  padding-top: 25px;
`;

const DayColumns = () => {
  const {
    visitTime: { visitTime },
  } = useContext(DiagramContext);

  const createGridColumn = useCallback(
    value => `${value + 2}/${value + 3}`,
    [],
  );

  return (
    <>
      {visitTime &&
        Object.keys(visitTime).map((item, i) => (
          <Wrapper key={i} column={createGridColumn(i)}>
            <DayDiagram visits={visitTime[item]} />
          </Wrapper>
        ))}
    </>
  );
};
export default DayColumns;
