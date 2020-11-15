import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './utils/reportWebVitals';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
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
