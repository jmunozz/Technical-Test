import React from 'react';
import { NavItem, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';

const VisualizerTableHeader = ({ bookings, day }) => {
  const week = [1, 2, 3, 4, 5, 6, 7];
  const header = week.map(d => (
    <div key={d} className="vis-table-header-cell" >
      <span>{day.isoWeekday(d).format('dddd')}</span>
      <span>{day.isoWeekday(d).format('DD/MM')}</span>
    </div>
  ));
  header.unshift(<div key={0} className="vis-table-header-cell"><span>Hours</span></div>);
  return (
    <div className="vis-table-header" >
      {header}
    </div>
  );
};

export default VisualizerTableHeader;
