import React from 'react';
import { Redirect } from 'react-router-dom';

import Loader from './Loader.jsx';

export default class Authed extends React.Component {
  componentDidMount() {
    this.props.checkAuth();
  }

  render() {
    if (this.props.authed.isLoaded) {
      if (this.props.authed.isAuthed) {
        return this.props.children;
      }
      return (
        <Redirect to="/login" />
      );
    }
    return (
      <article>
        <Loader />
      </article>
    );
  }
}
