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

export const startEditPlaylist = (id, updates) => {
  return (dispatch, getState) => {
    // const uid = getState().auth.uid;

    return database.ref(`playlists/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editPlaylist(id, updates))
      });
  };
};

// REMOVE_PLAYLIST
export const removePlaylist = ({ id } = {}) => ({
  type: 'REMOVE_PLAYLIST',
  id
});

export const startRemovePlaylist = ({ id } = {}) => {
  return (dispatch, getState) => {
    // const uid = getState().auth.uid;

    return database.ref(`playlists/${id}`)
      .remove()
      .then(() => {
        dispatch(removePlaylist({ id }));
      });
  };
};

// SET_PLAYLISTS
export const setPlaylists = (playlists) => ({
  type: 'SET_PLAYLISTS',
  playlists
});

export const startSetPlaylists = () => {
  return (dispatch, getState) => {
    // const uid = getState().auth.uid;
    
    return database.ref(`playlists`)
      .once('value')
      .then((snapshot) => {
        const playlists = [];

        snapshot.forEach((childSnapshot) => {
          playlists.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        dispatch(setPlaylists(playlists));
      });
  };
};