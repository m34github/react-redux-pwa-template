import React from 'react';
import { Link } from 'react-router-dom';
import { RaisedButton, Subheader } from 'material-ui';

import Header from './Header.jsx';
import { common } from '../commons/style';

class Home extends React.Component {
  render() {
    return (
      <article>
        <Header />

        <main style={common.main}>
          <RaisedButton
            label="Home"
            primary
            containerElement={
              <Link to="/" />
            }
          />
          <RaisedButton
            label="User"
            secondary
            containerElement={
              <Link to="/user" />
            }
          />
          <Subheader>
            ver.
            {(new Date()).getHours()}-
            {(new Date()).getMinutes()}-
            {(new Date()).getSeconds()}
          </Subheader>
        </main>
      </article>
    );
  }
}

export default Home;
