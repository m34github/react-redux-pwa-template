import React from 'react';
import { Link } from 'react-router-dom';
import { RaisedButton } from 'material-ui';

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
            containerElement={
              <Link to="/user" />
            }
          />
        </main>
      </article>
    );
  }
}

export default Home;
