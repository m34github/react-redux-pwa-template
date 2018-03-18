import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import {
  RaisedButton,
  TextField
} from 'material-ui';

import Header from './Header.jsx';
import { common, login } from '../commons/style';

class Login extends React.Component {
  componentWillMount() {
    this.setState({
      email: '',
      password: ''
    });
  }

  tryLogin() {
    const email = this.state.email.getValue();
    const password = this.state.password.getValue();
    this.props.tryLogin(email, password);
  }

  render() {
    if (this.props.authed.meta.isAuthed) {
      return <Redirect to="/memo" />;
    }
    return (
      <article>
        <Header leftIcon="chevron_left" />

        <main style={common.main}>
          <TextField
            hintText="Email address"
            floatingLabelText="Email address"
            defaultValue="alice@email.com"
            fullWidth
            ref={(el) => { this.state.email = el; }}
          />
          <TextField
            hintText="Password"
            floatingLabelText="Password"
            fullWidth
            type="password"
            ref={(el) => { this.state.password = el; }}
          />
          <section style={login.loginButton}>
            <RaisedButton
              label="Login"
              primary
              onClick={() => { this.tryLogin(); }}
            />
          </section>
        </main>
      </article>
    );
  }
}

Login.propTypes = {
  authed: PropTypes.object.isRequired,
  tryLogin: PropTypes.func.isRequired
};

export default Login;
