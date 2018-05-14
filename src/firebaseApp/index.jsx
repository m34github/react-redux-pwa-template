import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';

import Auth from './containers/Auth';
import Authed from './containers/Authed';
import Home from './containers/Home';
import store from './modules';
import { firebaseAppTheme } from './style';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(firebaseAppTheme)}>
          <article>
            <Router>
              <Switch>
                <Route exact path="/auth" component={Auth} />

                <Authed>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/hello" component={Home} />
                  <Redirect to="/" />
                </Authed>

                <Redirect to="/auth" />
              </Switch>
            </Router>
          </article>
        </MuiThemeProvider>
      </Provider>
    );
  }
}
