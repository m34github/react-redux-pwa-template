import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from '@material-ui/core';

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

          <section style={common.main}>
            <Typography variant="subheading">Home</Typography>
            <Button variant="contained" color="primary">Primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
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
