import React from 'react';
import { NavItem, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import moment from 'moment';


const VisualizerSlot = ({ booking }) => {
  const getPopover = _booking => (
    <Popover id={_booking._id} title={_booking.name}>
      <p><strong>User: </strong>{_booking.user}</p>
      <p><strong>Description: </strong>{_booking.description}</p>
    </Popover>
  );

  const style = {};
  const time = moment(booking.to).diff(booking.from, 'minutes');
  style.height = `${(time * 40) / 60}px`;
  style.top = `${(moment(booking.from).diff(moment(booking.from).hour(6), 'minutes') * 40) / 60}px`;
  return (
    <OverlayTrigger
      trigger={['hover', 'focus']}
      placement="bottom"
      overlay={getPopover(booking)}
    >
      <div style={style} className="vis-table-slot">
        <div>
          <span style={{ fontSize: '16px' }}>{booking.name}</span>
          <span style={{ fontSize: '10px' }}>{`${moment(booking.from).format('HH:mm')} - ${moment(booking.to).format('HH:mm')}`}</span>
        </div>
      </div>
    </OverlayTrigger>

  );
};

export default VisualizerSlot;
