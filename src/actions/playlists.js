import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_PLAYLIST,
export const addPlaylist = (playlist) => ({
  type: 'ADD_PLAYLIST',
  playlist
});

export const startAddPlaylist = (playlistData = {}) => {
  return (dispatch, getState) => {
    // const uid = getState().auth.uid;
    const {
      description = '',
      lists = [] 
    } = playlistData;
    const playlist = { description, lists }

    return database.ref(`playlists`).push(playlist)
      .then((ref) => {
        dispatch(addPlaylist({
          id: ref.key,
          ...playlist
        }));
      });
  };
};

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