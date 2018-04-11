import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrefacePage from '../components/PrefacePage';
import TransPrayerDashboardPage from '../components/TransPrayerDashboardPage';
import PlaylistDashboardPage from '../components/PlaylistDashboardPage';
import MyPlaylistPage from '../components/MyPlaylistPage';
import AddPlaylistPage from '../components/AddPlaylistPage';
import EditPlaylistPage from '../components/EditPlaylistPage';
import AboutPage from '../components/AboutPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={PrefacePage} exact={true} />
        <Route path="/trans-prayers" component={TransPrayerDashboardPage} />
        <Route path="/playlists" component={PlaylistDashboardPage} />
        <Route path="/playlist/:id" component={MyPlaylistPage} />
        <Route path="/create" component={AddPlaylistPage} />
        <Route path="/edit/:id" component={EditPlaylistPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;