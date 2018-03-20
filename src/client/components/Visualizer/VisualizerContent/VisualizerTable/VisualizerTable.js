import React from 'react';
import { NavItem, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import moment from 'moment';

import VisualizerTableBody from './VisualizerTableBody';
import VisualizerTableHeader from './VisualizerTableHeader';
import './VisualizerTable.css';

const VisualizerTable = ({ bookings }) => {
  const day = moment();
  console.log('day', day.toISOString());

  return (
    <div className="vis-table-container">
      <VisualizerTableHeader day={day.clone()} />
      <VisualizerTableBody day={day.clone()} bookings={bookings} />
    </div>
  );
};

export default VisualizerTable;
