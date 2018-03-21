import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';


import * as MODALS from '../../actions/modals';

import './NewButton.css';


const NewButton = ({ dispatch, disabled }) => {
  const handleClick = () => {
    dispatch(MODALS.toggleNewModal());
  };

  return (
    <Button bsStyle="primary" bsSize="large" block onClick={handleClick} disabled={!disabled}>
      Create New Booking
    </Button>);
};

NewButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default connect()(NewButton);
