import React from 'react';
import ReactDOM from 'react-dom';
import App from './responsiveComponent/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
