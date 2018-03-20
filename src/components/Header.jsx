import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  AppBar,
  Drawer,
  FontIcon,
  IconButton
} from 'material-ui';

import { SideMenu } from '../containers';
import { header } from '../commons/style';

class Header extends React.Component {
  componentWillMount() {
    const handleLeft = () => {
      switch (this.props.leftIcon) {
        case 'chevron_left': {
          return this.props.history.goBack();
        }
        default: {
          return null;
        }
      }
    };

    const handleRight = () => {
      switch (this.props.rightIcon) {
        case 'more_vert': {
          return this.setState({
            open: !this.state.open
          });
        }
        default: {
          return null;
        }
      }
    };

    this.setState({
      leftIcon: (
        <IconButton onClick={handleLeft}>
          <FontIcon className="material-icons">
            {this.props.leftIcon}
          </FontIcon>
        </IconButton>
      ),
      rightIcon: (
        <IconButton onClick={handleRight}>
          <FontIcon className="material-icons">
            {this.props.rightIcon}
          </FontIcon>
        </IconButton>
      ),
      open: false
    });
  }

  render() {
    return (
      <section>
        <AppBar
          title="PWA Template"
          titleStyle={header.title}
          iconElementLeft={this.state.leftIcon}
          iconElementRight={this.state.rightIcon}
        />
        <Drawer
          docked={false}
          open={this.state.open}
          openSecondary
          onRequestChange={() => {
            this.setState({ open: false });
          }}
        >
          <SideMenu />
        </Drawer>
      </section>
    );
  }
}

Header.propTypes = {
  history: PropTypes.object.isRequired,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string
};

Header.defaultProps = {
  leftIcon: null,
  rightIcon: null
};

export default withRouter(Header);
