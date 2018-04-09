import { connect } from 'react-redux';

import HomeComponent from '../components/Home.jsx';
import SideMenuComponent from '../components/SideMenu.jsx';
import { action } from '../actions';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  load: () => {
    dispatch(action.load());
  }
});

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export const SideMenu = connect(mapStateToProps, mapDispatchToProps)(SideMenuComponent);
