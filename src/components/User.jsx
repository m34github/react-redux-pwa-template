import React from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  List,
  ListItem,
  Paper,
  RaisedButton
} from 'material-ui';

import Header from './Header.jsx';
import { common, user } from '../commons/style';

class User extends React.Component {
  componentDidMount() {
    this.props.getUserInfo();
  }

  render() {
    if (this.props.user.meta.isLoaded) {
      return (
        <article>
          <Header />

          <main style={common.main}>
            <RaisedButton
              label="Home"
              containerElement={
                <Link to="/" />
              }
            />
            <RaisedButton
              label="User"
              primary
              containerElement={
                <Link to="/user" />
              }
            />

            <section style={user.section}>
              <Paper>
                <section style={user.avatar}>
                  <Avatar
                    src={this.props.user.payload.user.picture.large}
                    size={100}
                  />
                </section>
                <List>
                  <ListItem primaryText={this.props.user.payload.user.cell} />
                  <ListItem primaryText={this.props.user.payload.user.dob} />
                  <ListItem primaryText={this.props.user.payload.user.email} />
                  <ListItem primaryText={this.props.user.payload.user.gender} />
                  <ListItem primaryText={this.props.user.payload.user.name.first} />
                  <ListItem primaryText={this.props.user.payload.user.name.last} />
                  <ListItem primaryText={this.props.user.payload.user.phone} />
                </List>
              </Paper>
            </section>
          </main>
        </article>
      );
    }
    return (
      <article>
        Loading...
      </article>
    );
  }
}

export default User;
