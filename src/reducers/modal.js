const defaultStateModalReducer = {
  openLyricModal: undefined
};

export default (state = defaultStateModalReducer, action) => {
  switch (action.type) {
    case 'CLOSE_LYRIC_MODAL':
      return {
        ...state,
        openLyricModal: action.openLyricModal
      }
    default:
      return state
  }
};