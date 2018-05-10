import React from 'react';
import { Redirect } from 'react-router-dom';

import Loader from './Loader.jsx';

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: this.props.match.url.slice(1)
    };
  }

  render() {
    switch (this.state.mode) {
      case 'login': {
        return (
          <article>
            hello
          </article>
        );
      }
      default: {
        return (
          <article>
            <Loader />
          </article>
        );
      }
    }
  }
}
