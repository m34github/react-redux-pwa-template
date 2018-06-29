import React from 'react';
import PropTypes from 'prop-types';
import { Button, Typography, withStyles } from '@material-ui/core';

import Header from '../containers/Header';
import Loader from './Loader.jsx';
import { common } from '../style';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadHome();
  }

  render() {
    const { classes } = this.props;

    if (this.props.home.isLoaded) {
      return (
        <article>
          <Header />

          <main className={classes.main}>
            <Typography variant="subheading">Home</Typography>
            <Button variant="contained" color="primary">Primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
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
  classes: PropTypes.object.isRequired,
  home: PropTypes.object.isRequired,
  loadHome: PropTypes.func.isRequired
};

export default withStyles(common)(Home);
