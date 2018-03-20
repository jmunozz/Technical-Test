import React from 'react';
import { NavItem, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';


const VisualizerColumn = ({ bookings, type }) => {
  if (type === 'label') {
    let hours = Array.from(new Array(16), (val, index) => index + 6);
    hours = hours.map(hour => <div className="vis-table-body-column-cell" ><span>{`${hour}:00`}</span></div>);
    return (<div className="vis-table-body-column">{hours}</div>);
  }
  console.log('bookings', bookings);
  let cells = Array(16).fill(undefined);
  cells = cells.map(() => (<div className="vis-table-body-column-cell">
    <div className="vis-table-body-column-cell-slot vis-table-body-column-cell-slot-top" />
    <div className="vis-table-body-column-cell-slot" />
                           </div>));
  return (<div className="vis-table-body-column">{cells}</div>);
};

export default VisualizerColumn;
