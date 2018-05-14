import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Divider, RaisedButton, TextField } from 'material-ui';

import Loader from './Loader.jsx';
import { auth } from '../style';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  componentDidMount() {
    this.props.checkAuth();
  }

  loginUser() {
    const email = this.emailRef.current.getValue();
    const password = this.passwordRef.current.getValue();
    this.props.loginUser(email, password);
  }

  registUser() {
    const email = this.emailRef.current.getValue();
    const password = this.passwordRef.current.getValue();
    this.props.registUser(email, password);
  }

  render() {
    if (this.props.auth.isLoaded) {
      if (this.props.auth.isAuthed) {
        return (<Redirect to="/" />);
      }
      return (
        <article>
          <section style={auth.main}>
            <section style={auth.title}>
              <img src="assets/img/icon/sns-icon-300x300.png" alt="welcome" style={auth.img} />
            </section>

            <section style={auth.textField}>
              <TextField hintText="Email" floatingLabelText="Email" fullWidth ref={this.emailRef} />
              <TextField hintText="Password" floatingLabelText="Password" type="password" fullWidth ref={this.passwordRef} />
            </section>

            <section style={auth.button}>
              <RaisedButton label="Register" primary fullWidth onClick={() => { this.registUser(); }} />
              <Divider style={auth.divider} />
              <RaisedButton label="Login" fullWidth onClick={() => { this.loginUser(); }} />
            </section>
          </section>
        </article>
      );
    }
    return (
      <article>
        <Loader />
      </article>
    );
  }
}

Auth.propTypes = {
  auth: PropTypes.object.isRequired,
  checkAuth: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  registUser: PropTypes.func.isRequired
};

export default Auth;
