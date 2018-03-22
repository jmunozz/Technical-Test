import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Panel, FormGroup, Checkbox, ControlLabel, FormControl } from 'react-bootstrap';

import * as API from '../../actions/api';
import { transformFilters } from '../../helpers/api';

import './FilterPanel.css';

const FilterPanel = ({ filters, dispatch }) => {
  const handleChange = (e) => {
    const { target } = e;
    const isCheckbox = (target.type === 'checkbox');
    const value = isCheckbox ? target.checked : target.value;
    const { name } = target;
    const newFilters = { ...filters };
    if (isCheckbox) newFilters.equipements[name] = value;
    newFilters[name] = value;
    dispatch(API.updateFilters(newFilters));
    dispatch(API.fetchRooms(transformFilters(newFilters)));
  };


  const { equipements } = filters;
  const equipementsFilter = [];
  Object.keys(equipements).forEach((equ) => {
    equipementsFilter.push(<Checkbox id={equ} key={equ} name={equ} onChange={handleChange} checked={equipements[equ]}>{equ}</Checkbox>);
  });


  return (<div className="filter-container">
    <Panel>
      <Panel.Heading>
        <Panel.Title>Filters</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <form>
          <FormGroup>
            <ControlLabel>Capacity</ControlLabel>
            <FormControl min={1} name="capacity" type="number" value={filters.capacity} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Equipements</ControlLabel>
            {equipementsFilter}
          </FormGroup>
        </form>
      </Panel.Body>
    </Panel>
  </div>);
};

const mapStateToProps = state => ({
  filters: state.filters,
});

FilterPanel.propTypes = {
  filters: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(FilterPanel);
