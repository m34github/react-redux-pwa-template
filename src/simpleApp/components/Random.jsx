import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Loader from './Loader.jsx';
import { common } from '../style';

class Random extends React.Component {
  componentDidMount() {
    this.props.loadRandomUser();
  }

  componentWillUnmount() {
    this.props.resetRandomUser();
  }

  render() {
    if (this.props.random.isLoaded) {
      return (
        <article>
          <Header />

          <section style={common.main}>
            <Typography variant="subheading">Random</Typography>
            <Card>
              <CardMedia
                style={{ height: 0, paddingTop: '56.25%' }}
                image="https://source.unsplash.com/random/800x450"
                title="unsplash"
              />
              <CardContent>
                <Typography variant="headline">{this.props.random.user.login.username}</Typography>
                <Typography component="p">{this.props.random.user.email}</Typography>
              </CardContent>
            </Card>
          </section>

          <Footer index={1} />
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

Random.propTypes = {
  random: PropTypes.object.isRequired,
  loadRandomUser: PropTypes.func.isRequired,
  resetRandomUser: PropTypes.func.isRequired
};

export default Random;
