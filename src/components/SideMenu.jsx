import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  FontIcon,
  MenuItem
} from 'material-ui';

class SideMenu extends React.Component {
  componentWillMount() {
    this.props.checkAuth();
  }

  tryLogout() {
    this.props.tryLogout();
    this.props.history.push('/');
  }

  render() {
    if (this.props.authed.meta.isAuthed) {
      return (
        <section>
          <MenuItem
            leftIcon={<FontIcon className="material-icons">face</FontIcon>}
          >
            {this.props.authed.payload.user.displayName}
          </MenuItem>
          <MenuItem
            onClick={() => { this.tryLogout(); }}
          >
            Log out
          </MenuItem>
        </section>
      );
    }
    return (
      <section>
        <MenuItem
          leftIcon={<FontIcon className="material-icons">person</FontIcon>}
        >
          Guest
        </MenuItem>
        <MenuItem
          onClick={() => { this.props.history.push('/login'); }}
        >
          Log in
        </MenuItem>
      </section>
    );
  }
}

SideMenu.propTypes = {
  authed: PropTypes.object.isRequired,
  checkAuth: PropTypes.func.isRequired,
  tryLogout: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(SideMenu);
