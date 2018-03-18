import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  AppBar,
  FontIcon,
  IconButton
} from 'material-ui';

import { header } from '../commons/style';

class Header extends React.Component {
  componentWillMount() {
    const handleLeft = () => {
      switch (this.props.leftIcon) {
        case 'chevron_left': {
          this.props.history.goBack();
          break;
        }
        default: {
          null;
        }
      }
    };

    const handleRight = () => {
      switch (this.props.rightIcon) {
        default: {
          null;
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
      )
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
      </section>
    );
  }
}

Header.propTypes = {
  history: PropTypes.object,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string
};

Header.defaultProps = {
  history: null,
  leftIcon: null,
  rightIcon: null
};

export default withRouter(Header);
