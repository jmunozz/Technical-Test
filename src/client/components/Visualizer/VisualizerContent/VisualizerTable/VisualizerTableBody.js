import React from 'react';
import { NavItem, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import moment from 'moment';

import VisualizerColumn from './VisualizerColumn';

const VisualizerTableBody = ({ bookings, day }) => {
  const days = Array(7).fill([]);

  bookings.forEach((booking) => {
    const start = moment(booking.from);
    days.forEach((val, index) => {
      const _day = day.clone();
      if (start.isSame(_day.day(index + 1), 'day')) {
        days[index].push(booking);
      }
    });
  });

  const columns = days.map(d => <VisualizerColumn bookings={d} />);
  columns.unshift(<VisualizerColumn type="label" />);
  return (<div className="vis-table-body">{columns}</div>);
};


export default VisualizerTableBody;