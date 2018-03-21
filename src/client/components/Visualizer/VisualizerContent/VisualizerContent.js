import React from 'react';
import { NavItem, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { fecthBookings } from '../../../actions/api';
import VisualizerTable from './VisualizerTable/VisualizerTable';

import './VisualizerContent.css';


const VisualizerContent = ({ dispatch, bookings, roomDisplayed, day }) => {
  // Room to display is not in cache, fetch bookings.
  if (!bookings || !bookings[roomDisplayed]) {
    dispatch(fecthBookings(roomDisplayed));
    return (<span>Fetching bookings...</span>);
  }
  const _bookings = bookings[roomDisplayed];
  return (
    <VisualizerTable bookings={_bookings} day={day} dispatch={dispatch} />
  );
};

VisualizerContent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  bookings: PropTypes.array.isRequired,
  roomDisplayed: PropTypes.string.isRequired,
  day: PropTypes.object,
};

export default VisualizerContent;
