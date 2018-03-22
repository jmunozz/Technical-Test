import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import VisualizerNav from './VisualizerNav/VisualizerNav';
import VisualizerContent from './VisualizerContent/VisualizerContent';

import './Visualizer.css';

const Visualizer = ({ dispatch, rooms, roomDisplayed, bookings, day }) => (
  <div className="visualizer-container">
    {
        (!rooms) ? <img id="img-loading" alt="fetching rooms" /> : <VisualizerNav
          roomDisplayed={roomDisplayed}
          rooms={rooms}
          dispatch={dispatch}
        />
      }
    <VisualizerContent
      roomDisplayed={roomDisplayed}
      bookings={bookings}
      dispatch={dispatch}
      day={day}
    />
  </div>
);

const mapStateToProps = state => ({
  rooms: state.rooms,
  roomDisplayed: state.roomDisplayed,
  bookings: state.bookings,
  day: state.day,
});

Visualizer.propTypes = {
  rooms: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  roomDisplayed: PropTypes.string,
  bookings: PropTypes.object,
  day: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Visualizer);
