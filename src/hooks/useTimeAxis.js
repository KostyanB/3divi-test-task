import { useState, useCallback } from 'react';
import calcGreaterRoundNum from '../helpers/calcGreaterRoundNum';

const useTimeAxis = () => {
  const [timeAxisArr, setTimeAxisArr] = useState(null);
  const [diagramHeight, setDiagramHeight] = useState(0);

  const setTimeAxis = useCallback(time => {
    const arr = [];
    const maxNum = calcGreaterRoundNum(time);
    const step = maxNum / 4;

    const formatter = new Intl.NumberFormat('ru');

    // const createStr = num => {
    //   const str = num.toLocaleString().split(' ');
    //   console.log('str: ', str);
    //   return str.length > 3 ? `${str[0]},${str[1]}` : str;
    // };
    // arr.push(createStr(maxNum));
    arr.push(formatter.format(maxNum));

    for (let i = 3; i >= 1; i--) {
      arr.push(formatter.format(step * i));
      // arr.push(createStr(step * i));
    }
    setDiagramHeight(maxNum);
    setTimeAxisArr(arr);
  }, []);

  return {
    diagramHeight,
    timeAxisArr,
    setTimeAxis,
  };
};
export default useTimeAxis;
