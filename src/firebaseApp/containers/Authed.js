import { connect } from 'react-redux';

import * as action from '../modules/authed';
import authed from '../components/Authed.jsx';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  checkAuth: () => {
    dispatch(action.checkAuth());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(authed);
