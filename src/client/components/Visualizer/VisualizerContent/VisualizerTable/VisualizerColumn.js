import React from 'react';
import { NavItem, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import moment from 'moment';

import VisualizerSlot from './VisualizerSlot';


const VisualizerColumn = ({ bookings, type, className }) => {
  if (type === 'label') {
    let hours = Array.from(new Array(16), (val, index) => index + 6);
    hours = hours.map((hour, i) => <div className={`vis-table-body-column-cell vis-table-body-column-cell-header ${(i === 15) ? 'last-bottom' : ''}`} ><span>{`${hour}:00`}</span></div>);
    return (<div className="vis-table-body-column vis-table-body-column-header">{hours}</div>);
  }
  console.log('bookings', bookings);
  let cells = Array(16).fill(undefined);
  cells = cells.map((v, i) => (<div className={`vis-table-body-column-cell ${(i === 15) ? 'last-bottom' : ''}`}>
    <div className="vis-table-body-column-cell-slot vis-table-body-column-cell-slot-top" />
    <div className="vis-table-body-column-cell-slot" />
                               </div>));
  const slots = bookings.map(booking => <VisualizerSlot booking={booking} />);
  return (<div className={`vis-table-body-column ${className}`}>{cells}{slots}</div>);
};

export default VisualizerColumn;
