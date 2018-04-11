import { createStore, combineReducers } from 'redux';
import transPrayersReducer from '../reducers/transPrayers';
import playlistsReducer from '../reducers/playlists';
import playerReducer from '../reducers/player';

export default () => {
  const store = createStore(
    combineReducers({
      transPrayers: transPrayersReducer,
      playlists: playlistsReducer,
      player: playerReducer
    })
  );

  return store;
}
