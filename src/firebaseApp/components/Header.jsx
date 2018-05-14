import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Drawer, FontIcon, IconButton, MenuItem } from 'material-ui';

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
    return (
      <section>
        <AppBar
          title="FirebaseApp"
          showMenuIconButton={false}
          iconElementRight={
            <IconButton><FontIcon className="material-icons">more_vert</FontIcon></IconButton>
        }
          onRightIconButtonClick={() => { this.handleToggle(); }}
        />
        <Drawer
          docked={false}
          open={this.state.open}
          openSecondary
          onRequestChange={() => { this.handleClose(); }}
        >
          <AppBar title="hello" showMenuIconButton={false} />
          <MenuItem onClick={() => { this.props.logoutUser(); }}>Log out</MenuItem>
        </Drawer>
      </section>
    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired
};

export default Header;
