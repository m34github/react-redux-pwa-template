import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Divider,
  FontIcon,
  List,
  ListItem,
  Paper,
  RaisedButton,
  Subheader,
  TextField
} from 'material-ui';

import Header from './Header.jsx';
import { common, memo } from '../commons/style';

class Memo extends React.Component {
  componentWillMount() {
    this.setState({
      memo: ''
    });
  }

  componentDidMount() {
    this.props.readMemo();
  }

  writeMemo() {
    this.props.writeMemo(this.props.authed.payload.user.uid, this.state.memo.getValue());
  }

  render() {
    return (
      <article>
        <Header leftIcon="chevron_left" rightIcon="more_vert" />

        <main style={common.main}>
          <Subheader>memo</Subheader>
          <List>
            {
              this.props.memo.payload.memo.map((m, i) => (
                <section key={i}> {/* eslint-disable-line */}
                  <Divider />
                  <ListItem
                    leftAvatar={
                      <Avatar>
                        <FontIcon className="material-icons">face</FontIcon>
                      </Avatar>
                    }
                    primaryText={m}
                  />
                  <Divider />
                </section>
              ))
            }
          </List>
        </main>

        <section style={memo.footer}>
          <Paper style={memo.paper}>
            <TextField
              hintText="memo"
              ref={(el) => { this.state.memo = el; }}
            />
            <RaisedButton
              icon={<FontIcon className="material-icons">create</FontIcon>}
              primary
              onClick={() => { this.writeMemo(); }}
            />
          </Paper>
        </section>
      </article>
    );
  }
}

Memo.propTypes = {
  authed: PropTypes.object.isRequired,
  memo: PropTypes.object.isRequired,
  readMemo: PropTypes.func.isRequired,
  writeMemo: PropTypes.func.isRequired
};

export default Memo;
