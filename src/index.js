import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './index.css';

import store from './redux/store';
import Principal from './componentes/Principal';

ReactDOM.render(
  <Provider store={store}>
    <Principal/>
  </Provider>,
  document.querySelector('#root')
);
