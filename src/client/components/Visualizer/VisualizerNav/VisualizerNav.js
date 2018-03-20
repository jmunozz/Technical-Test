import React from 'react';
import { NavItem, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { updateRoomDisplayed } from '../../../actions/api';

import './VisualizerNav.css';


const VisualizerNav = ({ dispatch, rooms, roomDisplayed }) => {
  const handleSelect = (eventKey) => {
    dispatch(updateRoomDisplayed(eventKey));
  };

  const roomTabs = [];
  rooms.forEach((room) => {
    roomTabs.push(<NavItem eventKey={room._id} onSelect={handleSelect}>{room.name}</NavItem>);
  });
  return (
    <Nav bsStyle="tabs" activeKey={roomDisplayed}>
      {roomTabs}
    </Nav>
  );
};

VisualizerNav.propTypes = {
  dispatch: PropTypes.func.isRequired,
  rooms: PropTypes.array.isRequired,
  roomDisplayed: PropTypes.string.isRequired,
};

export default VisualizerNav;
