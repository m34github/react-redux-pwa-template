import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Loader from './Loader.jsx';

class Authed extends React.Component {
  componentDidMount() {
    this.props.checkAuth();
  }

  render() {
    if (this.props.authed.meta.isLoaded) {
      if (this.props.authed.meta.isAuthed) {
        return this.props.children;
      }
      return <Redirect to="/login" />;
    }
    return (
      <article>
        <Loader />
      </article>
    );
  }
}

Authed.propTypes = {
  authed: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  checkAuth: PropTypes.func.isRequired
};

export default Authed;
