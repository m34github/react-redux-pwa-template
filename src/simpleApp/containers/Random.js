import { connect } from 'react-redux';

import * as action from '../modules/random';
import Random from '../components/Random.jsx';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  loadRandomUser: () => {
    dispatch(action.loadRandomUser());
  },
  resetRandomUser: () => {
    dispatch(action.resetRandomUser());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Random);
