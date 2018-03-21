export function updateDay(state, action) {
  return { ...state, ...{ day: action.day } };
}

export function toggleAlert(state) {
  return { ...state, ...{ isAlertOn: !state.isAlertOn } };
}
