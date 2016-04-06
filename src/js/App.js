import React from 'react';
import ReactDOM from 'react-dom'
import routes from './config/routes';

import { Router } from 'react-router';

import 'css/g';

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'));
