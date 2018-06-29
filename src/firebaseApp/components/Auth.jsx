import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Button, Divider, TextField, withStyles } from '@material-ui/core';

import Loader from './Loader.jsx';
import { auth } from '../style';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailRef: React.createRef(),
      passwordRef: React.createRef()
    };
  }

  componentDidMount() {
    this.props.checkAuth();
  }

  loginUser() {
    const email = this.state.emailRef.current.value;
    const password = this.state.passwordRef.current.value;
    this.props.loginUser(email, password);
  }

  registUser() {
    const email = this.state.emailRef.current.value;
    const password = this.state.passwordRef.current.value;
    this.props.registUser(email, password);
  }

  render() {
    const { classes } = this.props;

    if (!this.props.auth.isLoaded) {
      return (
        <article>
          <Loader />
        </article>
      );
    }

    if (this.props.auth.isAuthed) {
      return (<Redirect to="/" />);
    }

    return (
      <article>
        <section className={classes.main}>
          <section className={classes.title}>
            <img src="assets/img/android/icon/drawable-xxxhdpi-icon.png" alt="welcome" className={classes.img} />
          </section>

          <section>
            <TextField className={classes.textField} label="Email" placeholder="Email" fullWidth inputRef={this.state.emailRef} />
            <TextField className={classes.textField} label="Password" placeholder="Password" type="password" fullWidth inputRef={this.state.passwordRef} />
          </section>

          <section className={classes.button}>
            <Button variant="contained" color="primary" fullWidth onClick={() => { this.registUser(); }}>Register</Button>
            <Divider className={classes.divider} />
            <Button variant="contained" fullWidth onClick={() => { this.loginUser(); }}>Login</Button>
          </section>
        </section>
      </article>
    );
  }
}

Auth.propTypes = {
  auth: PropTypes.object.isRequired,
  checkAuth: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  registUser: PropTypes.func.isRequired
};

export default withStyles(auth)(Auth);
