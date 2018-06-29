import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Loader from './Loader.jsx';

class Authed extends React.Component {
  componentDidMount() {
    this.props.checkAuthed();
  }

  render() {
    if (!this.props.authed.isLoaded) {
      return (
        <article>
          <Loader />
        </article>
      );
    }

    if (this.props.authed.isAuthed) {
      return this.props.children;
    }

    return (<Redirect to="/auth" />);
  }
}

Authed.propTypes = {
  authed: PropTypes.object.isRequired,
  checkAuthed: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired
};

export default Authed;
