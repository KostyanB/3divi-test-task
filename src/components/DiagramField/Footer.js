import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';

const {
  visitors,
  colors: { extraTextColor },
} = env;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
const ItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  & > div {
    width: 15px;
    height: 8px;
    background-color: ${props => props.color};
  }
  & > span {
    font-size: 10px;
    color: ${extraTextColor};
  }
`;
const Item = ({ name, color }) => (
  <ItemWrap color={color}>
    <div />
    <span>{name}</span>
  </ItemWrap>
);

const Footer = () => (
  <Wrapper>
    {Object.values(visitors).map(({ name, color }, i) => (
      <Item key={i} name={name} color={color} />
    ))}
  </Wrapper>
);
export default Footer;
