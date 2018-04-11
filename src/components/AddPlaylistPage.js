import React from 'react';
import { connect } from 'react-redux';
import PlaylistForm from './PlaylistForm';
import { startAddPlaylist } from '../actions/playlists';

export class AddPlaylistPage extends React.Component {
  onSubmit = playlist => {
    this.props.startAddPlaylist(playlist);
    this.props.history.push('/playlists');
  };
  render() {
    return (
      <div>
        <div>
          <div>
            <h3>เพิ่มรายการสวดมนต์</h3>
          </div>
        </div>
        <div>
          <PlaylistForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddPlaylist: playlist => dispatch(startAddPlaylist(playlist))
});

export default connect(undefined, mapDispatchToProps)(AddPlaylistPage);
