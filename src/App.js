import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import env from './env.json';
import { getData, selectStatus, selectError } from './store/getDataSlice';

import { GlobalStyle } from './components/Styled/GlobalStyle';
import Preloader from './components/Styled/Preloader';
import Header from './components/Header';
import Container from './components/Styled/Container';
import DeviceSelection from './components/DeviceSelection';
import DiagramField from './components/DiagramField';
import ErrorLoad from './components/Styled/ErrorLoad';

function App() {
  const dbUrl = env.backend.dbUrl;
  // const dbUrl = `https://analytics.3divi.ru/api/v2/statistics/user/2088/devices/dates/ages/?key=d3aa35bde5ef46899b91aca9c66e174e&b=2020/03/08%2012:00:00&e=20
  // 20/09/08%2012:00:00&tzo=0`;
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(getData(dbUrl));
  }, [dispatch, dbUrl]);

  return (
    <>
      <GlobalStyle />
      <Header />
      {status === 'success' && (
        <Container>
          <DeviceSelection />
          <DiagramField />
        </Container>
      )}
      {status === 'loading' && <Preloader />}
      {error && <ErrorLoad text={error} />}
    </>
  );
}
export default App;
