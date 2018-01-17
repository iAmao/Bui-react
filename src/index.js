import React from 'react';
import ReactDOM from 'react-dom';

import App from './docs/App';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import '../node_modules/highlight.js/styles/grayscale.css'
import './styles/flexbox.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
