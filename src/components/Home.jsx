import React from 'react';
import PropTypes from 'prop-types';
import { RaisedButton } from 'material-ui';

import Header from './Header.jsx';
import Loader from './Loader.jsx';
import { common } from '../commons/style';

class Home extends React.Component {
  componentDidMount() {
    this.props.load();
  }

  render() {
    if (this.props.home.meta.isLoaded) {
      return (
        <article>
          <Header rightIcon="more_vert" />

          <main style={common.main}>
            <RaisedButton
              label="Hello"
              secondary
            />
          </main>
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

Home.propTypes = {
  home: PropTypes.object.isRequired,
  load: PropTypes.func.isRequired
};

export default Home;
