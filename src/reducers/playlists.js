// playlists Reducer
export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLAYLIST':
      return [...state, action.playlist]
    case 'REMOVE_PLAYLIST':
      return state.filter(({ id }) =>
        id !== action.id
      )
    case 'EDIT_PLAYLIST':
      return state.map((playlist) => {
        if (playlist.id === action.id) {
          return {
            ...playlist,
            ...action.updates
          }
        } else {
          return playlist
        }
      })
    default:
      return state;
  }
};