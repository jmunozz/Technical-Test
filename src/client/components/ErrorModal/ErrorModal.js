import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import * as MODALS from '../../actions/modals';


import './ErrorModal.css';


const ErrorModal = ({ isErrorModalOpen, dispatch, errorModalMessage }) => {
  const closeModal = () => {
    dispatch(MODALS.toggleErrorModal());
  };

  return (
    <Modal show={isErrorModalOpen} onHide={closeModal}>
      <Modal.Header>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {errorModalMessage}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = state => ({
  isErrorModalOpen: state.isErrorModalOpen,
  errorModalMessage: state.errorModalMessage,
});


ErrorModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isErrorModalOpen: PropTypes.bool.isRequired,
  errorModalMessage: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(ErrorModal);
