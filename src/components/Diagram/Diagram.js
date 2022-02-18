import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';

import WeekDays from './WeekDays';

const { mainTextColor, extraTextColor, hoverColor } = env.colors;

const Wrapper = styled.div`
  width: 100%;
  /* height: 150px; */
  flex-grow: 1;
  display: grid;
  grid-template-columns: 50px repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr) 30px;
  padding-right: 30px;
`;

const Diagram = () => {
  return (
    <Wrapper>
      <WeekDays />
    </Wrapper>
  );
};
export default Diagram;
