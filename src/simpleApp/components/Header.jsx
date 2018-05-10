import React from 'react';
import { withRouter } from 'react-router-dom';
import { AppBar, FontIcon, IconButton } from 'material-ui';

class Header extends React.Component {
  render() {
    return (
      <section>
        <AppBar
          title="SimpleApp"
          showMenuIconButton={false}
          iconElementRight={
            <IconButton><FontIcon className="material-icons">more_vert</FontIcon></IconButton>
          }
        />
      </section>
    );
  }
}

export default withRouter(Header);
