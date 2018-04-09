import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';

import { Home } from './containers';
import store from './commons/store';
import { sampleTheme } from './commons/style';

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(sampleTheme)}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('#root')
);
