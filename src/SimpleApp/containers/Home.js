import { connect } from 'react-redux';

import * as action from '../modules/home';
import home from '../components/Home.jsx';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  loadHome: () => {
    dispatch(action.loadHome());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(home);
