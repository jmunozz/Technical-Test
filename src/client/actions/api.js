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
    status: json.status,
    rooms: json.data,
  };
}

/**
 * Update filters for fetch room action.
 */
export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export function updateFilters(filters) {
  return { type: UPDATE_FILTERS, filters };
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
