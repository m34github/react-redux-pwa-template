import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { AppBar, Drawer, Icon, IconButton, MenuItem, Toolbar, Typography, withStyles } from '@material-ui/core';

import { header } from '../style';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle() {
    this.setState({
      open: !this.state.oepn
    });
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <section>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.typography}>
              FirebaseApp
            </Typography>
            <IconButton color="inherit" onClick={() => { this.handleToggle(); }}>
              <Icon>more_vert</Icon>
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer anchor="right" open={this.state.open} onClose={() => { this.handleClose(); }}>
          <section className={classes.sideMenu}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="subheading" color="inherit">
                  SideMenu
                </Typography>
              </Toolbar>
            </AppBar>
            <MenuItem onClick={this.props.logoutUser}>
              Logout
            </MenuItem>
          </section>
        </Drawer>
      </section>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
};

export default withRouter(withStyles(header)(Header));
