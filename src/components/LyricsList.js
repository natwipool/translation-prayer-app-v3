import React from 'react';
import Modal from 'react-modal';
import LyricsListItem from './LyricsListItem';

const LyricsList = props => (
  <div>
    <Modal
      isOpen={props.openLyricModal}
      contentLabel="lyric-modal"
      onRequestClose={props.closeLyricModal}
      ariaHideApp={false}
    >
      <div>
        <h3>{props.playlist.precept}</h3>
        {props.playlist.lyrics.map((text, index) =>
          <LyricsListItem key={index} text={text} />
        )}
      </div>
      <button onClick={props.closeLyricModal}>ปิด</button>
    </Modal>
  </div>
);

export default LyricsList;
