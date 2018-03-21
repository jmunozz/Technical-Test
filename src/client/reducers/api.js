export function receiveRooms(state, action) {
  if (action.status !== 200) { return { ...state, ...{ isErrorModalOpen: true, errorModalMessage: 'Impossible to fetch rooms' } }; }
  return { ...state, ...{ rooms: action.rooms, roomDisplayed: action.rooms.length ? action.rooms[0]._id : null } };
}

export function updateFilters(state, action) {
  return { ...state, ...{ filters: action.filters } };
}

export function updateRoomDisplayed(state, action) {
  return { ...state, ...{ roomDisplayed: action.roomId } };
}

export function receiveBookings(state, action) {
  if (action.status !== 200) { return { ...state, ...{ isErrorModalOpen: true, errorModalMessage: 'Impossible to fetch bookings' } }; }
  return { ...state, ...{ bookings: { ...state.bookings, ...{ [action.roomId]: action.bookings } } } };
}

export function hasPostedBooking(state, action) {
  if (action.status !== 200) {
    return { ...state, ...{ isErrorModalOpen: true, errorModalMessage: 'Booking failed' } };
  }
  return { ...state, ...{ isAlertOn: true, alertMessage: 'Congrats! Slot has been booked !' } };
}

export function flushRooms(state) {
  return { ...state, bookings: null };
}
