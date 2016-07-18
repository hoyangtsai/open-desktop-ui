import React from 'react';

import App from '../App';
import Index from '../components/Index';
import Button from '../components/Button';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';


export const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Index },
  childRoutes: [
    { path: 'button', component: Button }
  ]
};
