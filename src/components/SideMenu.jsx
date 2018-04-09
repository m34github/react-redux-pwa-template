import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  FontIcon,
  MenuItem
} from 'material-ui';

class SideMenu extends React.Component {
  render() {
    return (
      <section>
        <MenuItem
          leftIcon={<FontIcon className="material-icons">person</FontIcon>}
        >
          Guest
        </MenuItem>
        <MenuItem
          onClick={() => { this.props.history.push('/'); }}
        >
          Log in
        </MenuItem>
      </section>
    );
  }
}

SideMenu.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(SideMenu);
