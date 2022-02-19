import React from 'react';

const Repeat = props => {
  const items = [];
  for (let i = 0; i < props.count; i++) {
    items.push(props.children(i));
  }
  return <>{items}</>;
};
export default Repeat;
