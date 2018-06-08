import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Random from './containers/Random';
import store from './modules';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <article>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/random" component={Random} />
              <Redirect to="/" />
            </Switch>
          </Router>
        </article>
      </Provider>
    );
  }
}
