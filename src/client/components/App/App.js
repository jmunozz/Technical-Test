import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Alert } from 'react-bootstrap';

import './App.css';
import Visualizer from '../Visualizer/Visualizer';
import NewButton from '../NewButton/NewButton';
import NewModal from '../NewModal/NewModal';
import ErrorModal from '../ErrorModal/ErrorModal';
import FilterPanel from '../FilterPanel/FilterPanel';

import * as API from '../../actions/api';
import * as GENERAL from '../../actions/general';


const App = ({ rooms, dispatch, isAlertOn }) => {
  const handleDismiss = () => {
    dispatch(GENERAL.toggleAlert());
  };

  if (!rooms) {
    dispatch(API.fetchRooms(''));
  }

  return (<div className="container">
    {isAlertOn &&
      <Alert bsStyle="success" onDismiss={handleDismiss}>
        Congrats! Your booking has been created!
      </Alert>
    }
    <ErrorModal />
    {rooms && <NewModal />}
    <div className="main-container">
      <FilterPanel />
      <Visualizer />
    </div>
    <NewButton disabled={rooms && rooms.length} />
  </div>);
};

const mapStateToProps = state => ({
  rooms: state.rooms,
  isAlertOn: state.isAlertOn,
});

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  rooms: PropTypes.array,
  isAlertOn: PropTypes.bool,
};

export default connect(mapStateToProps)(App);
