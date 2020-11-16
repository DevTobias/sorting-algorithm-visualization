import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './utils/reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/styles/rsuite-dark.css';
import './index.css';

import App from './components/App';
import store from './app/store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
);

reportWebVitals();
