import React from 'react';

import App from '../App';
import Main from '../components/Main';
import Button from '../components/Button';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// export default (
//   <Route path="/" component={App}>
//     <IndexRoute component={Main} />
//     <Route path="button" component={Button} />
//   </Route>
// );

export let routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'button', component: Button }
  ]
};
