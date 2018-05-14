import { connect } from 'react-redux';

import * as action from '../modules/header';
import Header from '../components/Header.jsx';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  logoutUser: () => {
    dispatch(action.logoutUser());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
