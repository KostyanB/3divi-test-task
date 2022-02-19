import React, { useContext } from 'react';
import { DiagramContext } from '../../context';
import Item from './Item';
import AxisItem from './AxisItem';

const TimeAxis = () => {
  const {
    timeAxis: { timeAxisArr },
  } = useContext(DiagramContext);

  return (
    <>
      {timeAxisArr &&
        timeAxisArr.map((item, i) => <AxisItem key={i} name={item} />)}
      <Item row="5/7" mount={1}>
        0
      </Item>
    </>
  );
};
export default TimeAxis;
