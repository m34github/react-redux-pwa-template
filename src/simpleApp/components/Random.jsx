import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardMedia, Subheader } from 'material-ui';

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
          <Subheader>Random</Subheader>

          <section style={common.main}>
            <Card>
              <CardMedia>
                <img src="https://source.unsplash.com/random/800x450" alt="Unsplash" />
              </CardMedia>
              <CardHeader
                avatar={this.props.random.user.picture.large}
                title={this.props.random.user.login.username}
                subtitle={this.props.random.user.email}
              />
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
