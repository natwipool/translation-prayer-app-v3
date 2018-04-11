const defaultStatePlayerReducer = {
  closePlayer: false,
  isPlaying: false,
  index: 0
};

export default (state = defaultStatePlayerReducer, action) => {
  switch (action.type) {
    case 'CLOSE_PLAYER':
      return {
        ...state,
        closePlayer: !state.closePlayer,
      }
    case 'IS_PLAYING_TOGGLE':
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };
    case 'SET_PLAYING':
      return {
        ...state,
        isPlaying: action.boolean
      }
    case 'INCREMENT_INDEX':
      return {
        ...state,
        index: state.index + 1
      };
    case 'DECREMENT_INDEX':
      return {
        ...state,
        index: state.index - 1
      };
    case 'SET_INDEX':
      return {
        ...state,
        index: action.index
      }
    default:
      return state;
  }
};