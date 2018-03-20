import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';
import Visualizer from '../Visualizer/Visualizer';
import NewButton from '../NewButton/NewButton';
import NewModal from '../NewModal/NewModal';
import ErrorModal from '../ErrorModal/ErrorModal';
import FilterPanel from '../FilterPanel/FilterPanel';

import * as API from '../../actions/api';


const App = ({ rooms, dispatch }) => {
  if (!rooms) {
    dispatch(API.fetchRooms(''));
  }
  return (<div className="container">
    <ErrorModal />
    <NewModal />
    <div className="main-container">
      <FilterPanel />
      <Visualizer />
    </div>
    <NewButton />
  </div>);
};

const mapStateToProps = state => ({
  rooms: state.rooms,
});

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  rooms: PropTypes.array,
};

export default connect(mapStateToProps)(App);
