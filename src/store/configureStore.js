import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import transPrayersReducer from '../reducers/transPrayers';
import playlistsReducer from '../reducers/playlists';
import playerReducer from '../reducers/player';
import modalReducer from '../reducers/modal';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      transPrayers: transPrayersReducer,
      playlists: playlistsReducer,
      player: playerReducer,
      modal: modalReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}
