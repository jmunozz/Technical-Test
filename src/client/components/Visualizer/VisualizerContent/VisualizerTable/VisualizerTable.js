import React from 'react';
import { NavItem, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Glyphicon, Button } from 'react-bootstrap';

import { updateDay } from '../../../../actions/general';
import VisualizerTableBody from './VisualizerTableBody';
import VisualizerTableHeader from './VisualizerTableHeader';
import './VisualizerTable.css';

const VisualizerTable = ({ bookings, day, dispatch }) => {
  const nextWeek = () => {
    const _day = day.clone();
    dispatch(updateDay(_day.add(7, 'days')));
  };

  const lastWeek = () => {
    const _day = day.clone();
    dispatch(updateDay(_day.subtract(7, 'days')));
  };

  const _day = day.clone();

  return (
    <div className="vis-table-container">
      <div className="vis-table">
        <div className="vis-table-nav">
          <div>
            <Button onClick={lastWeek}>
              <Glyphicon glyph="chevron-left" />
            </Button>
          </div>
          <div>
            <h2>{`From ${_day.isoWeekday(1).format('DD/MM')} to  ${_day.isoWeekday(7).format('DD/MM')}`}</h2>
          </div>
          <div>
            <Button onClick={nextWeek}>
              <Glyphicon glyph="chevron-right" />
            </Button>
          </div>
        </div>
        <VisualizerTableHeader day={day.clone()} />
        <VisualizerTableBody day={day.clone()} bookings={bookings} />
      </div>
    </div>
  );
};

export default VisualizerTable;
