import { connect } from 'react-redux';

import * as action from '../modules/authed';
import Authed from '../components/Authed.jsx';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  checkAuthed: (email, password) => {
    dispatch(action.checkAuthed(email, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Authed);
