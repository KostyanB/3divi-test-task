import { useState, useCallback } from 'react';
import calcGreaterRoundNum from '../helpers/calcGreaterRoundNum';
import formatScaleNum from '../helpers/formatScaleNum';

const useTimeScale = () => {
  const [timeScaleArr, setTimeScaleArr] = useState(null);
  const [diagramHeight, setDiagramHeight] = useState(0);

  const setTimeScale = useCallback(time => {
    const arr = [];
    const maxNum = calcGreaterRoundNum(time);
    const step = maxNum / 4;

    arr.push(formatScaleNum(maxNum));

    for (let i = 3; i >= 1; i--) {
      arr.push(formatScaleNum(step * i));
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
