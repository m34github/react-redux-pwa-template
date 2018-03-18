import React from 'react';
import { Subheader } from 'material-ui';

import Header from './Header.jsx';
import { common } from '../commons/style';

class Memo extends React.Component {
  componentDidMount() {
    this.props.getMemo();
  }

  render() {
    return (
      <article>
        <Header leftIcon="chevron_left" />

        <main style={common.main}>
          <Subheader>{this.props.memo.payload.memo}</Subheader>
        </main>
      </article>
    );
  }
}

export default Memo;
