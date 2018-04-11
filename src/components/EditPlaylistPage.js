import React from 'react';
import { connect } from 'react-redux';
import PlaylistForm from './PlaylistForm';
import { startEditPlaylist } from '../actions/playlists';

export class EditPlaylistPage extends React.Component {
  onSubmit = playlist => {
    this.props.startEditPlaylist(this.props.playlist.id, playlist);
    this.props.history.push(`/playlist/${this.props.playlist.id}`);
  };
  render() {
    return (
      <div>
        <div>
          <div>
            <h3 className="page-header__title">แก้ไขรายการสวดมนต์</h3>
          </div>
        </div>
        <div>
          <PlaylistForm
            playlist={this.props.playlist}
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  playlist: state.playlists.find(
    playlist => playlist.id === props.match.params.id
  )
});

const mapDispatchToProps = dispatch => ({
  startEditPlaylist: (id, playlist) => dispatch(startEditPlaylist(id, playlist))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPlaylistPage);