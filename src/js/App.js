import React from 'react';
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Index from './components/Index';
import Button from './components/Button';
import Spacing from './components/Spacing';

import 'css/g';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
};

render((
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="button" component={Button} />
        <Route path="spacing" component={Spacing} />
      </Route>
    </Router>
  ), document.getElementById('app')
);

// render((
//   <Router history={hashHistory}> {routes} </Router>
//   ), document.getElementById('app')
// );
