import React from 'react';
import { connect } from 'react-redux';
import PlaylistForm from './PlaylistForm';
import { editPlaylist } from '../actions/playlists';

const EditPlaylistPage = (props) => (
  <div>
    <h3>แก้ไขการสวดมนต์</h3>
    <PlaylistForm
      playlist={props.playlist}
      onSubmit={((playlist) => {
        props.dispatch(editPlaylist(props.playlist.id, playlist));
        props.history.push(`/playlist/${props.playlist.id}`)
      })}
    />
  </div>
)

const mapStateToProps = (state, props) => ({
  playlist: state.playlists.find((playlist) =>
    playlist.id === props.match.params.id
  )
})  

export default connect(mapStateToProps)(EditPlaylistPage);