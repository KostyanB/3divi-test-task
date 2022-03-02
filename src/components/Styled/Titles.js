import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';

const { mainTextColor } = env.colors;

const H1 = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: ${props => (props.color ? props.color : mainTextColor)};
  text-align: ${props => (props.align ? props.align : 'center')};
  text-indent: ${props => (props.indent ? props.indent : 0)};
`;

export const Title1 = ({ text, indent, align, color }) => (
  <H1 indent={indent} align={align} color={color}>
    {text}
  </H1>
);

const H2 = styled.h2`
  font-size: 14px;
  font-weight: bold;
  color: ${props => (props.color ? props.color : mainTextColor)};
  text-align: ${props => (props.align ? props.align : 'center')};
  text-indent: ${props => (props.indent ? props.indent : 0)};
`;

export const Title2 = ({ text, indent, align, color }) => (
  <H2 indent={indent} align={align} color={color}>
    {text}
  </H2>
);
