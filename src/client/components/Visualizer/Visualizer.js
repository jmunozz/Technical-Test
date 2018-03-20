import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NavRooms from './NavRooms/NavRooms';

import './Visualizer.css';

const Visualizer = ({ dispatch, rooms }) => {
  const a = '';
  return (
    <div className="visualizer-container">
      {
        (!rooms) ? <img src="assets/img/loading.gif" /> : <NavRooms rooms={rooms} dispatch={dispatch} />
      }
    </div>
  );
};

const mapStateToProps = state => ({
  rooms: state.rooms,
});

Visualizer.propTypes = {
  rooms: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Visualizer);
