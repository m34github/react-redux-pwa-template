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
          <div>ver. 1520628746.619</div>
        </main>
      </article>
    );
  }
}

export default Home;
