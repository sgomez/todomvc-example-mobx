import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import { Provider } from 'mobx-react';

import 'todomvc-app-css/index.css'

import * as stores from './stores';

render(
    <Provider {...stores}>
        <App />
    </Provider>,
  document.getElementById('root')
);
