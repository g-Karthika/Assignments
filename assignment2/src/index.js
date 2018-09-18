import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Barebone from './Barebone';
import BpmPlay from './BpmPlay';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Barebone />, document.getElementById('root'));
ReactDOM.render(<BpmPlay />, document.getElementById('secondroot'));
registerServiceWorker();
