import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { DiagramContextProvider } from '../../context';

import Diagram from '../Diagram';
import Footer from './Footer';

const { mainTextColor, extraTextColor } = env.colors;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  height: 100%;
  padding: 10px;
  border: 1px solid ${extraTextColor};
`;
const Title = styled.h2`
  color: ${mainTextColor};
  padding-left: 80px;
  font-size: 14px;
  font-weight: bold;
`;

const DiagramField = () => {
  return (
    <Wrapper>
      <Title>Total views: Age (by day of week)</Title>
      <DiagramContextProvider>
        <Diagram />
      </DiagramContextProvider>
      <Footer />
    </Wrapper>
  );
};
export default DiagramField;
