import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Icon, Paper } from '@material-ui/core';

import { footer } from '../style';

class Footer extends React.Component {
  select(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <section style={footer.paper}>
        <Paper>
          <BottomNavigation
            showLabels
            value={this.props.index}
          >
            <BottomNavigationAction
              label="Home"
              icon={<Icon>home</Icon>}
              onClick={() => { this.select('/'); }}
            />
            <BottomNavigationAction
              label="Random"
              icon={<Icon>help_outline</Icon>}
              onClick={() => { this.select('/random'); }}
            />
          </BottomNavigation>
        </Paper>
      </section>
    );
  }
}

Footer.propTypes = {
  history: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default withRouter(Footer);
