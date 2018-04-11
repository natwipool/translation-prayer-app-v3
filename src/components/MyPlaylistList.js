import React from 'react';
import { connect } from 'react-redux';
import MyPlaylistListItem from './MyPlaylistListItem';
import Player from './Player';
import getPlaylistData from '../utils/getPlaylistData';

const MyPlaylistList = props => {
  return (
    <div>
      {props.playlists.map((playlist, index) => (
        <MyPlaylistListItem key={index} {...playlist} />
      ))}
      <Player playlists={props.playlists} />
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  playlists: getPlaylistData(state.transPrayers, props.lists)
});

export default connect(mapStateToProps)(MyPlaylistList);
