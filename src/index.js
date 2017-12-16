import React from 'react';
import ReactDOM from 'react-dom'
import {StyleRoot} from 'radium'
import '../node_modules/font-awesome/css/font-awesome.css'
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<StyleRoot><App /></StyleRoot>, document.getElementById('root'));
registerServiceWorker();
