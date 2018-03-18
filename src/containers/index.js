import { connect } from 'react-redux';

import HomeComponent from '../components/Home.jsx';
import UserComponent from '../components/User.jsx';
import MemoComponent from '../components/Memo.jsx';
import { action } from '../actions';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: () => {
      dispatch(action.getUserInfo());
    },
    getMemo: () => {
      dispatch(action.getMemo());
    }
  };
};

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export const User = connect(mapStateToProps, mapDispatchToProps)(UserComponent);
export const Memo = connect(mapStateToProps, mapDispatchToProps)(MemoComponent);
