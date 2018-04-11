// CLOSE_PLAYER
export const closePlayer = () => ({
  type: 'CLOSE_PLAYER',
});

// IS_PLAYING_TOGGLE
export const isPlayingToggle = () => ({
  type: 'IS_PLAYING_TOGGLE'
});

// SET_PLAYING
export const setPlaying = (boolean = false) => ({
  type: 'SET_PLAYING',
  boolean
});

// INCREMENT_INDEX
export const incrementIndex = () => ({
  type: 'INCREMENT_INDEX'
});

// DECREMENT_INDEX
export const decrementIndex = () => ({
  type: 'DECREMENT_INDEX'
});

// SET_INDEX
export const setIndex = (index = 0) => ({
  type: 'SET_INDEX',
  index
});
