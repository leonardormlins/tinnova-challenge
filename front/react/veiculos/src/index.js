import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Components/Root';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Root></Root>,
  document.getElementById('root')
);

serviceWorker.unregister();
