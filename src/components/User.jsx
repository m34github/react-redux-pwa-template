import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  FontIcon,
  List,
  ListItem,
  Paper
} from 'material-ui';

import Header from './Header.jsx';
import Loader from './Loader.jsx';
import { common, user } from '../commons/style';

class User extends React.Component {
  componentDidMount() {
    this.props.getUserInfo();
  }

  render() {
    if (this.props.user.meta.isLoaded) {
      return (
        <article>
          <Header leftIcon="chevron_left" rightIcon="more_vert" />

          <main style={common.main}>
            <Paper>
              <section style={user.avatar}>
                <Avatar
                  src={this.props.user.payload.user.picture.large}
                  size={120}
                />
              </section>
              <List>
                <ListItem
                  primaryText={`${this.props.user.payload.user.name.first} ${this.props.user.payload.user.name.last}`}
                  leftIcon={<FontIcon className="material-icons">person</FontIcon>}
                />
                <ListItem
                  primaryText={this.props.user.payload.user.dob}
                  leftIcon={<FontIcon className="material-icons">cake</FontIcon>}
                />
                <ListItem
                  primaryText={this.props.user.payload.user.email}
                  leftIcon={<FontIcon className="material-icons">mail</FontIcon>}
                />
                <ListItem
                  primaryText={this.props.user.payload.user.phone}
                  leftIcon={<FontIcon className="material-icons">phone</FontIcon>}
                />
                <ListItem
                  primaryText={this.props.user.payload.user.cell}
                  leftIcon={<FontIcon className="material-icons">smartphone</FontIcon>}
                />
              </List>
            </Paper>
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

User.propTypes = {
  user: PropTypes.object.isRequired,
  getUserInfo: PropTypes.func.isRequired
};

export default User;
