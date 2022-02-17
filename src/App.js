import React, { Suspense } from 'react';
import { GlobalStyle } from './components/Styled/GlobalStyle';
import Preloader from './components/Styled/Preloader';

function App() {
  return (
    <Suspense fallback={<Preloader />}>
      <GlobalStyle />
      <div>work</div>
    </Suspense>
  );
}
export default App;
