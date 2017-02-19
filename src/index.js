import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import 'todomvc-app-css/index.css'
import { Provider } from 'mobx-react';

import * as stores from './stores';

render(
    <Provider {...stores}>
        <App />
    </Provider>,
  document.getElementById('root')
);
