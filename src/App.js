import React, { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getData,
  selectStatus,
  selectError,
  selectData,
} from './store/getDataSlice';

import { GlobalStyle } from './components/Styled/GlobalStyle';
import Preloader from './components/Styled/Preloader';
import DeviceSelection from './components/DeviceSelection';
import Diagram from './components/Diagram';

function App({ dbUrl }) {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const status = useSelector(selectStatus);
  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(getData(dbUrl));
  }, [dispatch, dbUrl]);

  return (
    <Suspense fallback={<Preloader />}>
      <GlobalStyle />
      {data && (
        <>
          <DeviceSelection />
          <Diagram />
        </>
      )}
    </Suspense>
  );
}
export default App;
