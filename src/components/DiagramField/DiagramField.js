import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { DiagramContextProvider } from '../../context';

import { Title2 } from '../Styled/Titles';
import Diagram from '../Diagram';
import Footer from './Footer';

const { extraTextColor } = env.colors;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  height: 100%;
  padding: 10px;
  border: 1px solid ${extraTextColor};
`;

const DiagramField = () => (
  <Wrapper>
    <Title2
      text="Total views: Age (by day of week)"
      indent="80px"
      align="left"
    />
    <DiagramContextProvider>
      <Diagram />
    </DiagramContextProvider>
    <Footer />
  </Wrapper>
);
export default DiagramField;
