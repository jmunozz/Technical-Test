import React from 'react';
import { NavItem, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import moment from 'moment';

import VisualizerColumn from './VisualizerColumn';

const VisualizerTableBody = ({ bookings, day }) => {
  const days = Array(7).fill(undefined).map(() => []);

  bookings.forEach((booking) => {
    const start = moment(booking.from);
    days.forEach((val, index) => {
      const _day = day.clone();
      if (start.isSame(_day.isoWeekday(index + 1), 'day')) {
        days[index].push(booking);
      }
    });
  });

  const lastOne = days.length - 1;
  const columns = days.map((d, i) => <VisualizerColumn bookings={d} className={(i === lastOne) ? 'last-right' : ''} />);
  columns.unshift(<VisualizerColumn type="label" />);
  return (<div className="vis-table-body">{columns}</div>);
};


export default VisualizerTableBody;
