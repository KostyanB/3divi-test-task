import { useState, useCallback } from 'react';
import calcGreaterRoundNum from '../helpers/calcGreaterRoundNum';

const useTimeScale = () => {
  const [timeScaleArr, setTimeScaleArr] = useState(null);
  const [diagramHeight, setDiagramHeight] = useState(0);

  const setTimeScale = useCallback(time => {
    const arr = [];
    const maxNum = calcGreaterRoundNum(time);
    const step = maxNum / 4;

    const formatter = new Intl.NumberFormat('ru');

    arr.push(formatter.format(maxNum));

    for (let i = 3; i >= 1; i--) {
      arr.push(formatter.format(step * i));
    }

    setDiagramHeight(maxNum);
    setTimeScaleArr(arr);
  }, []);

  return {
    diagramHeight,
    timeScaleArr,
    setTimeScale,
  };
};
export default useTimeScale;
