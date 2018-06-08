import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { BottomNavigation, BottomNavigationItem, FontIcon, Paper } from 'material-ui';

import { footer } from '../style';

class Footer extends React.Component {
  select(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <section style={footer.paper}>
        <Paper>
          <BottomNavigation selectedIndex={this.props.index}>
            <BottomNavigationItem
              label="Home"
              icon={<FontIcon className="material-icons">home</FontIcon>}
              onClick={() => { this.select('/'); }}
            />
            <BottomNavigationItem
              label="Random"
              icon={<FontIcon className="material-icons">help_outline</FontIcon>}
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
