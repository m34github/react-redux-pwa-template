import { connect } from 'react-redux';

import * as action from '../modules/auth';
import Auth from '../components/Auth.jsx';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  checkAuth: (email, password) => {
    dispatch(action.checkAuth(email, password));
  },
  loginUser: (email, password) => {
    dispatch(action.loginUser(email, password));
  },
  registUser: (email, password) => {
    dispatch(action.registUser(email, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
