import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { setTransPrayers } from './actions/transPrayers';
import { startSetPlaylists } from './actions/playlists';
import transPrayersData from './data/transPrayersData.json';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(setTransPrayers(transPrayersData));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetPlaylists()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});
