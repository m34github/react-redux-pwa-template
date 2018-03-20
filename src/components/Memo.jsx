import React from 'react';
import PropTypes from 'prop-types';
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
        <Header leftIcon="chevron_left" rightIcon="more_vert" />

        <main style={common.main}>
          <Subheader>{this.props.memo.payload.memo}</Subheader>
        </main>
      </article>
    );
  }
}

Memo.propTypes = {
  memo: PropTypes.object.isRequired,
  getMemo: PropTypes.func.isRequired
};

export default Memo;
