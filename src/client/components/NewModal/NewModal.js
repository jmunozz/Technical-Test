import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import * as MODALS from '../../actions/modals';


import './NewModal.css';


const NewModal = ({ isNewModalOpen, dispatch }) => {
  const closeModal = () => {
    dispatch(MODALS.toggleNewModal());
  };

  return (
    <Modal show={isNewModalOpen} onHide={closeModal}>
      <Modal.Header>
        <Modal.Title>New Booking</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button onClick={closeModal}>Close</Button>
        <Button bsStyle="primary">Create</Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = state => ({
  isNewModalOpen: state.isNewModalOpen,
});


NewModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isNewModalOpen: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(NewModal);
