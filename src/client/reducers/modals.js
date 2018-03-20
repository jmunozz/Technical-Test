export function toggleNewModal(state) {
  return { ...state, ...{ isNewModalOpen: !(state.isNewModalOpen) } };
}

export function toggleErrorModal(state) {
  return { ...state, ...{ isErrorModalOpen: !(state.isErrorModalOpen) } };
}

