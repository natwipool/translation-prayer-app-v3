import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MyPlaylistList from './MyPlaylistList';
import { removePlaylist } from '../actions/playlists';

const MyPlaylistPage = (props) => (
  <div>
    <h1>{props.playlist.description}</h1>
    <Link to={`/edit/${props.playlist.id}`}>
      <button>แก้ไข</button>
    </Link>
    <button onClick={() => {
      props.dispatch(removePlaylist({ id: props.playlist.id}))
      props.history.push('/playlists')
    }}>ลบ</button>
    <MyPlaylistList {...props.playlist}/>
  </div>
)

const mapStateToProps = (state, props) => ({
  playlist: state.playlists.find((playlist) => playlist.id === props.match.params.id)
});

export default connect(mapStateToProps)(MyPlaylistPage);