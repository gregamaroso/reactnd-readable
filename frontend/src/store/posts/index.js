import React from 'react';
import { render } from 'react-dom';

import Root from './components/Root';
import configureStore from './store/'
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('main')
);

registerServiceWorker();
