import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { CircularProgress } from 'material-ui';

import { user } from '../commons/style';

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
        <section style={user.progress}>
          <CircularProgress size={80} />
        </section>
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
