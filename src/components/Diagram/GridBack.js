import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';

const { gridFill, gridBorder } = env.colors.gridBack;

const Wrapper = styled.div`
  grid-row: 1/5;
  grid-column: 2/9;
  display: flex;
  flex-direction: column;
  z-index: -1;
`;
const Padding = styled.div`
  width: 100%;
  height: 11.1111%;
`;
const Grid = styled.div`
  width: 100%;
  flex-grow: 1;
  background-color: ${gridBorder};
  display: grid;
  grid-template-columns: 1fr repeat(6, 2fr) 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 1px;
  border-top: 1px solid ${gridBorder};

  & > div {
    background-color: ${gridFill};
  }
`;

const Repeat = props => {
  const items = [];
  for (let i = 0; i < props.count; i++) {
    items.push(props.children(i));
  }
  return <>{items}</>;
};

const GridBack = () => {
  return (
    <Wrapper>
      <Padding />
      <Grid>
        <Repeat count={32}>{index => <div key={index} />}</Repeat>
      </Grid>
    </Wrapper>
  );
};
export default GridBack;
