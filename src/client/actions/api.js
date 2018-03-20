import fetch from 'cross-fetch';

/**
 * Fetch all rooms or filtered rooms.
*/
export const REQUEST_ROOMS = 'REQUEST_ROOMS';
export function requestRooms(filters) {
  return {
    type: REQUEST_ROOMS,
    filters
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

export function fetchRooms(filters) {
  return (dispatch) => {
    dispatch(requestRooms());
    return fetch(`/api/rooms${filters}`)
      .then(response => response.json())
      .then((json) => {
        dispatch(receiveRooms(json));
      });
  };
}

export function fecthBookings(roomId) {
  return dispatch => fetch(`/api/rooms/${roomId}`)
    .then(response => response.json())
    .then((json) => {
      dispatch(receiveBookings(roomId, json));
    });
}
