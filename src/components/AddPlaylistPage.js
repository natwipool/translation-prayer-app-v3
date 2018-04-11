import React from 'react';
import { connect } from 'react-redux';
import PlaylistForm from './PlaylistForm';
import { addPlaylist } from '../actions/playlists';

const AddPlaylistPage = (props) => (
  <div>
    <h3>สร้างรายการสวดมนต์</h3>
    <PlaylistForm
      onSubmit={(playlist) => {
        props.dispatch(addPlaylist(playlist));
        props.history.push('/playlists')
      }}
    />
  </div>
)

export default connect()(AddPlaylistPage);