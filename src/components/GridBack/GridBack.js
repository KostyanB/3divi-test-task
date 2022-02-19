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
const Padding = styled.div`
  /* width: 100%; */
  /* height: 12.5%; */
  grid-row: 1;
  grid-column: 1/9;
`;
const Grid = styled.div`
  width: 100%;
  flex-grow: 1;
  background-color: ${gridBorder};
  display: grid;
  grid-template-columns: 1fr repeat(6, 2fr) 1fr;
  grid-template-rows: repeat(4, 50px);
  /* grid-template-rows: 1fr repeat(4, 2fr); */
  gap: 1px;
  border-top: 1px solid ${gridBorder};
  /* padding-top: 12.5%; */

  & > div {
    background-color: ${gridFill};
  }
`;

const GridBack = () => {
  return (
    <Wrapper>
      <Grid>
        {/* <Padding className="padding" /> */}
        <Repeat count={32}>{index => <div key={index} />}</Repeat>
      </Grid>
    </Wrapper>
  );
};
export default GridBack;
