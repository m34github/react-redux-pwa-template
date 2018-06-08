import React from 'react';
import PropTypes from 'prop-types';
import { RaisedButton, Subheader } from 'material-ui';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Loader from './Loader.jsx';
import { common } from '../style';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadHome();
  }

  render() {
    if (this.props.home.isLoaded) {
      return (
        <article>
          <Header />
          <Subheader>Home</Subheader>

          <section style={common.main}>
            <RaisedButton primary label="Primary" />
            <RaisedButton secondary label="Secondary" />
          </section>

          <Footer index={0} />
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
  loadHome: PropTypes.func.isRequired
};

export default Home;
