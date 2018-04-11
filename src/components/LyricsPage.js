import React from 'react';
import LyricsList from './LyricsList';

const LyricsPage = (props) => (
  <div>
    <LyricsList 
      playlist={props.playlists.find((playlist, index) =>
        index === props.index
      )}
      openLyricModal={props.openLyricModal}
      closeLyricModal={props.closeLyricModal}
    />
  </div>
);

export default LyricsPage;