import React, { useEffect, useState } from 'react';
import Item from './Item';

const AxisItem = ({ name }) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);

    return () => setMount(false);
  }, []);

  return (
    <Item mount={mount}>
      <span>{name}</span>
    </Item>
  );
};
export default AxisItem;
