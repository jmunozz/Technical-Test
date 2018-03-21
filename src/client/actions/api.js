import fetch from 'cross-fetch';

/**
 * Flush all rooms current caching.
*/
export const FLUSH_ROOMS = 'FLUSH_ROOMS';
export function flushRooms() {
  return {
    type: FLUSH_ROOMS,
  };
}
/**
 * Received rooms from fetch action.
 */
export const RECEIVE_ROOMS = 'RECEIVE_ROOMS';
export function receiveRooms(json) {
  return {
    type: RECEIVE_ROOMS,
    status: json.code,
    rooms: json.data,
  };
}
/**
 * Received bookings from fetch action
 */
export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export function receiveBookings(roomId, json) {
  return {
    type: RECEIVE_BOOKINGS,
    status: json.code,
    bookings: json.data,
    roomId
  };
}
/**
 * Receive response from posted booking
 */
export const HAS_POSTED_BOOKING = 'HAS_POSTED_BOOKING';
export function hasPostedBooking(json) {
  return {
    type: HAS_POSTED_BOOKING,
    status: json.code
  };
}
/**
 * Update filters for fetch room action.
 */
export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export function updateFilters(filters) {
  return { type: UPDATE_FILTERS, filters };
}
/**
 * Update room that is displayed in visualizer.
 */
export const UPDATE_ROOM_DISPLAYED = 'UPDATE_ROOM_DISPLAYED';
export function updateRoomDisplayed(roomId) {
  return { type: UPDATE_ROOM_DISPLAYED, roomId };
}
/**
 * Get all rooms depending on filters.
 */
export function fetchRooms(filters) {
  return dispatch => fetch(`/api/rooms${filters}`)
    .then(response => response.json())
    .then((json) => {
      dispatch(receiveRooms(json));
    });
}
/**
 * get All bookings for one room.
 */
export function fecthBookings(roomId) {
  return dispatch => fetch(`/api/rooms/${roomId}`)
    .then(response => response.json())
    .then((json) => {
      dispatch(receiveBookings(roomId, json));
    });
}
