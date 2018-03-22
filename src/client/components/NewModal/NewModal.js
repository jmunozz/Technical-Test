import React from 'react';
import { connect } from 'react-redux';
import { Alert, Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import fetch from 'cross-fetch';

import 'react-datepicker/dist/react-datepicker.css';

import * as MODALS from '../../actions/modals';
import * as GENERAL from '../../actions/general';
import * as API from '../../actions/api';

import './NewModal.css';


/*
** Take a starting and an ending range in minutes.
*/
function buildTimeRange(start, end) {
  const timeRange = [];
  let i = start;
  while (i <= end) {
    timeRange.push(i);
    i += 30;
  }
  return timeRange;
}

/*
** Take a starting hour in minutes
*/
function buildTimeRangeTo(start) {
  const timeRange = [];
  for (let i = 30; i <= 120; i += 30) {
    timeRange.push(start + i);
  }
  return timeRange;
}


const defaultState = {
  timeRangeFrom: buildTimeRange(360, 1320),
  timeRangeTo: buildTimeRangeTo(360),
  date: moment(),
  from: 360,
  to: 390,
  description: '',
  name: '',
  isAlertOn: false,
  alertMessage: '',
};


class NewModal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.handleFrom = this.handleFrom.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
    this.state = { ...defaultState, ...{ roomId: props.roomDisplayed } };
  }

  closeModal() {
    this.setState({ isAlertOn: false });
    this.props.dispatch(MODALS.toggleNewModal());
  }

  handleFrom(event) {
    this.setState({ timeRangeTo: buildTimeRangeTo(Number(event.target.value)) });
    this.setState({
      from: Number(event.target.value),
      to: Number(event.target.value) + 30,
    });
  }

  handleDate(date) {
    this.setState({ date });
  }

  handleChange(event) {
    let toChange;
    if (event.target.name === 'description') toChange = { description: event.target.value };
    if (event.target.name === 'name') toChange = { name: event.target.value };
    if (event.target.name === 'roomId') toChange = { roomId: event.target.value };
    if (event.target.name === 'to') toChange = { to: Number(event.target.value) };
    this.setState({ ...toChange });
  }

  handleDismiss() {
    this.setState({ isAlertOn: false });
  }

  handleSubmit() {
    const { to, from, date, description, name, roomId } = this.state;
    const newBooking = {
      from: date.hours(Math.trunc(from / 60)).minutes(from % 60).seconds(0).milliseconds(0)
        .toISOString(),
      to: date.hours(Math.trunc(to / 60)).minutes(to % 60).seconds(0).milliseconds(0)
        .toISOString(),
      description,
      name,
    };
    return fetch(`/api/rooms/${roomId}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(newBooking),
    })
      .then(response => response.json())
      .then((json) => {
        if (json.code !== 200) this.setState({ isAlertOn: true, alertMessage: json.message });
        else {
          this.props.dispatch(MODALS.toggleNewModal());
          this.props.dispatch(GENERAL.toggleAlert());
          this.props.dispatch(API.flushRooms());
        }
      });
  }


  render() {
    return (
      <Modal show={this.props.isNewModalOpen} onHide={this.closeModal}>
        <Modal.Header>
          <Modal.Title>New Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.state.isAlertOn &&
            <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
              {this.state.alertMessage}
            </Alert>
          }
          <form>
            <FormGroup>
              <ControlLabel>Room to book</ControlLabel>
              <FormControl
                name="roomId"
                value={this.state.roomId}
                componentClass="select"
                placeholder="select a room"
                onChange={this.handleChange}
              >
                {this.props.rooms.map(room => (<option key={room._id} value={room._id}>{room.name}</option>))}
              </FormControl>
              <ControlLabel>Name of the event</ControlLabel>
              <FormControl
                type="text"
                placeholder="Type the name here"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <ControlLabel>Description of the event</ControlLabel>
              <FormControl
                componentClass="textarea"
                name="description"
                value={this.state.description}
                placeholder="type the description here"
                onChange={this.handleChange}
              />
              <ControlLabel>Date</ControlLabel>
              <DatePicker
                selected={this.state.date}
                onChange={this.handleDate}
              />
              <ControlLabel>From</ControlLabel>
              <FormControl
                name="from"
                value={this.state.from}
                componentClass="select"
                placeholder="select start time"
                onChange={this.handleFrom}
              >
                {this.state.timeRangeFrom.map(time => (<option key={time} value={time}>{`${Math.trunc(time / 60)}:${(time % 60) / 10}0`}</option>))}
              </FormControl>
              <ControlLabel>To</ControlLabel>
              <FormControl
                name="to"
                value={this.state.to}
                componentClass="select"
                placeholder="select end time"
                onChange={this.handleChange}
              >
                {this.state.timeRangeTo.map(time => (<option key={time} value={time}>{`${Math.trunc(time / 60)}:${(time % 60) / 10}0`}</option>))}
              </FormControl>
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.closeModal}>Close</Button>
          <Button bsStyle="primary" onClick={this.handleSubmit}>Create</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}


const mapStateToProps = state => ({
  isNewModalOpen: state.isNewModalOpen,
  rooms: state.rooms,
  roomDisplayed: state.roomDisplayed,
});


NewModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isNewModalOpen: PropTypes.bool.isRequired,
  rooms: PropTypes.array,
  roomDisplayed: PropTypes.string,
};

export default connect(mapStateToProps)(NewModal);
