export function receiveRooms(state, action) {
  if (action.status) { return { ...state, ...{ isErrorModalOpen: true, errorModalMessage: 'Impossible to fetch rooms' } }; }
  return { ...state, ...{ rooms: action.rooms } };
}

export function updateFilters(state, action) {
  return { ...state, ...{ filters: action.filters } };
}
