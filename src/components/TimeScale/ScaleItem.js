import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import env from '../../env.json';

const { transitionDuration } = env;

const Span = styled.div`
  opacity: ${props => (props.mount ? 1 : 0)};
  transition: opacity ${transitionDuration};
`;

const ScaleItem = ({ name }) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    name && setMount(true);
  }, [name]);
  console.log('asldh');
  return <Span mount={mount}>{name}</Span>;
};
export default ScaleItem;
