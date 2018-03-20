import ACTIONS from '../actions';
import * as MODALS from './modals';
import * as API from './api';

/*
** Initial state
*/

const initialState = {
  isNewModalOpen: false,
  rooms: null,
  roomDisplayed: null,
  isErrorModalOpen: false,
  errorModalMessage: '',
  filters: {
    capacity: 1,
    equipements: {
      TV: false,
      'Retro Projecteur': false,
    }
  }
};

/*
** Reducer
*/
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_NEW_MODAL:
      return MODALS.toggleNewModal(state);
    case ACTIONS.TOGGLE_ERROR_MODAL:
      return MODALS.toggleErrorModal(state);
    case ACTIONS.RECEIVE_ROOMS:
      return API.receiveRooms(state, action);
    case ACTIONS.RECEIVE_BOOKINGS:
      return API.receiveBookings(state, action);
    case ACTIONS.UPDATE_FILTERS:
      return API.updateFilters(state, action);
    case ACTIONS.UPDATE_ROOM_DISPLAYED:
      return API.updateRoomDisplayed(state, action);
    default:
      return state;
  }
}
