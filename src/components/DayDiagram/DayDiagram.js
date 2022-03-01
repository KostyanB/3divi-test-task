import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const Column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
`;

const DayDiagram = ({ visits }) => {
  return (
    <Column>
      {Object.entries(visits).map((item, i) => (
        <Item
          // key={`${item[0]}-${item[1]}-${i}`}
          key={i}
          visitor={item[0]}
          size={item[1]}
        />
      ))}
    </Column>
  );
};
export default DayDiagram;
