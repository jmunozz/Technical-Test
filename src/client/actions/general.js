/**
 * Update day that is displayed in Visualizer
*/
export const UPDATE_DAY = 'UPDATE_DAY';
export function updateDay(day) {
  return { type: UPDATE_DAY, day };
}
/*
** Show/ hide alert.
*/
export const TOGGLE_ALERT = 'TOGGLE_ALERT';
export function toggleAlert() {
  return { type: TOGGLE_ALERT };
}
