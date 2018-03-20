import React from 'react';
import { NavItem, Nav } from 'react-bootstrap';

import './NavRooms.css';

class NavRooms extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      roomId: props.rooms[0]._id,
    };
  }

  handleSelect(eventKey) {
    this.setState({
      roomId: eventKey
    });
  }

  render() {
    const roomTabs = [];
    this.props.rooms.forEach((room) => {
      roomTabs.push(<NavItem eventKey={room._id} onSelect={this.handleSelect}>{room.name}</NavItem>);
    });
    return (
      <Nav bsStyle="tabs" activeKey={this.state.roomId}>
        {roomTabs}
      </Nav>
    );
  }
}

export default NavRooms;
