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
      <div style={{ flex: 1 }}>
        <FilterPanel />
        <NewButton disabled={!!(rooms && rooms.length)} />
      </div>
      <Visualizer />
    </div>
          </div>);
};

const mapStateToProps = state => ({
  rooms: state.rooms,
  isAlertOn: state.isAlertOn,
});

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAlertOn: PropTypes.bool.isRequired,
  rooms: PropTypes.array,
};

export default connect(mapStateToProps)(App);
