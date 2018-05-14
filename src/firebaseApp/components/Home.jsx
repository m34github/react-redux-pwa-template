import React from 'react';
import PropTypes from 'prop-types';
import { FontIcon, List, ListItem, Subheader } from 'material-ui';

import Header from '../containers/Header';
import Loader from './Loader.jsx';

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
          <List>
            <ListItem primaryText="Foo" leftIcon={<FontIcon className="material-icons">grade</FontIcon>} />
            <ListItem primaryText="Bar" leftIcon={<FontIcon className="material-icons">favorite</FontIcon>} />
            <ListItem primaryText="Baz" leftIcon={<FontIcon className="material-icons">android</FontIcon>} />
          </List>
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
