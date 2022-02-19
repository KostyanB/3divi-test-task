import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { useDispatch, useSelector } from 'react-redux';
import { DiagramContext } from '../../context';

const Wrapper = styled.div`
  grid-column: ${props => props.column};
  grid-row: 1/5;
  background-color: transparent;
`;

const Column = ({ visits }) => {
  // console.log('visits: ', visits);
  return <div></div>;
};

const DayColumns = () => {
  const {
    visitTime: { visitTime },
  } = useContext(DiagramContext);

  return (
    <>
      {visitTime &&
        Object.keys(visitTime).map((item, i) => (
          <Wrapper key={i} column={`${i + 2}/${i + 3}`}>
            <Column visits={visitTime[item]} />
          </Wrapper>
        ))}
      {/* <Wrapper column={'2/3'} />
      <Wrapper column={'3/4'} />
      <Wrapper column={'4/5'} /> */}
    </>
  );
};
export default DayColumns;
