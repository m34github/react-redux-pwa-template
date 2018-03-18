import React from 'react';
import { Link } from 'react-router-dom';
import {
  FloatingActionButton,
  FontIcon,
  RaisedButton,
  Subheader
} from 'material-ui';

import Header from './Header.jsx';
import { common } from '../commons/style';

import { auth } from '../commons/firebase.config';

class Home extends React.Component {
  render() {
    return (
      <article>
        <Header />

        <main style={common.main}>
          <Subheader>w/o auth</Subheader>
          <RaisedButton
            label="Home"
            primary
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
          <Subheader>w/ auth</Subheader>
          <RaisedButton
            label="Memo"
            secondary
            containerElement={
              <Link to="/memo" />
            }
          />
        </main>

        <FloatingActionButton style={common.fab}>
          <FontIcon
            className="material-icons"
            onClick={
              () => {
                auth.signOut()
                  .then(() => {
                    console.log('signed out'); // eslint-disable-line
                  })
                  .catch((err) => {
                    console.log('error:', err); // eslint-disable-line
                  });
              }
            }
          >
            exit_to_app
          </FontIcon>
        </FloatingActionButton>
      </article>
    );
  }
}

export default Home;
