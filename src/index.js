import React from 'react';
import { render } from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import App from './App';
import env from './env.json';

const dbUrl = env.backend.dbUrl;
// const dbUrl = `https://analytics.3divi.ru/api/v2/statistics/user/2088/devices/dates/ages/?key=d3aa35bde5ef46899b91aca9c66e174e&b=2020/03/08%2012:00:00&e=20
// 20/09/08%2012:00:00&tzo=0`;

const app = ({ dbUrl }) => (
  <React.StrictMode>
    <Provider store={store}>
      <App dbUrl={dbUrl} />
    </Provider>
  </React.StrictMode>
);

render(app({ dbUrl: dbUrl }), document.getElementById('root'));
