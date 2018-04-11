import uuid from 'uuid';

// ADD_PLAYLIST,
export const addPlaylist = ({ description = '', lists = [] }) => ({
  type: 'ADD_PLAYLIST',
  playlist: {
    id: uuid(),
    description,
    lists
  }
});

// EDIT_PLAYLIST,
export const editPlaylist = (id, updates) => ({
  type: 'EDIT_PLAYLIST',
  id,
  updates
});

// REMOVE_PLAYLIST
export const removePlaylist = ({ id } = {}) => ({
  type: 'REMOVE_PLAYLIST',
  id
});