import React from 'react';
import { Link } from 'react-router-dom';
import {
  RaisedButton,
  Subheader
} from 'material-ui';

import Header from './Header.jsx';
import { common } from '../commons/style';

class Home extends React.Component {
  render() {
    return (
      <article>
        <Header rightIcon="more_vert" />

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
      </article>
    );
  }
}

export default Home;
