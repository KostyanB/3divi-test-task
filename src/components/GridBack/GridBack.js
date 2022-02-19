import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import Repeat from './Repeat';

const { gridFill, gridBorder } = env.colors.gridBack;

const Wrapper = styled.div`
  grid-row: 1/5;
  grid-column: 2/9;
  display: flex;
  flex-direction: column;
  z-index: -1;
  padding-top: 25px;
`;
const Grid = styled.div`
  width: 100%;
  flex-grow: 1;
  background-color: ${gridBorder};
  display: grid;
  grid-template-columns: 1fr repeat(6, 2fr) 1fr;
  grid-template-rows: repeat(4, 50px);
  gap: 1px;
  border-top: 1px solid ${gridBorder};

  & > div {
    background-color: ${gridFill};
  }
`;

const GridBack = () => {
  return (
    <Wrapper>
      <Grid>
        <Repeat count={32}>{index => <div key={index} />}</Repeat>
      </Grid>
    </Wrapper>
  );
};
export default GridBack;
