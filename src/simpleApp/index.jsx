import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';

import Home from './containers/Home';
import store from './modules';
import { theme } from './style';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <article>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Redirect to="/" />
              </Switch>
            </Router>
          </article>
        </MuiThemeProvider>
      </Provider>
    );
  }
}
