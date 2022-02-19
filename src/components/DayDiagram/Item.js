import React, { useContext, useCallback } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { DiagramContext } from '../../context';

const {
  transitionDuration,
  colors: { mainFill },
} = env;

const Div = styled.div`
  width: 100%;
  height: ${props => props.height};
  background-color: ${props => props.color};
  border-bottom: ${props => (props.height ? `1px solid ${mainFill}` : 'none')};
  transition: height ${transitionDuration};
`;

const Item = ({ visitor, size }) => {
  const visitors = env.visitors;
  const {
    timeAxis: { diagramHeight },
  } = useContext(DiagramContext);

  const calcSize = useCallback(
    size => (size ? `${(size * 100) / diagramHeight}%` : 0),
    [diagramHeight],
  );

  return <Div color={visitors[visitor].color} height={calcSize(size)} />;
};
export default Item;
