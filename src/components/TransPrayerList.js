import React from 'react';
import { connect } from 'react-redux';
import TransPrayerListItem from './TransPrayerListItem';
import Player from './Player';
import LyricsPage from './LyricsPage';
import PlayerOptions from './PlayerOptions';
import { setIndex, setPlaying, closePlayer } from '../actions/player';
import { openLyricModal } from '../actions/modal';

class TransPrayerList extends React.Component {
  componentWillUnmount() {
    this.props.closePlayer(false);
  }

  playByIndex = index => () => {
    this.props.setIndex(index);
    this.props.setPlaying(true);
    this.props.openLyricModal(true);
  };

  onClosePlayer = () => {
    if (!this.props.player.closePlayer) {
      this.props.closePlayer(true);
    } else {
      this.props.closePlayer(false);
    }  
  };

  openModal = index => () => {
    this.props.setIndex(index);
    this.props.openLyricModal(true);
  };

  closeModal = () => {
    this.props.openLyricModal(false);
  };
  render() {
    return (
      <div>
        <LyricsPage
          playlists={this.props.transPrayers}
          index={this.props.player.index}
          openLyricModal={!!this.props.modal.openLyricModal}
          closeLyricModal={this.closeModal}
        />
        <PlayerOptions onClosePlayer={this.onClosePlayer} />
        {this.props.transPrayers.map((tranPrayer, index) => (
          <div key={index}>
            <TransPrayerListItem {...tranPrayer} />
            {!this.props.player.closePlayer ? (
              <button onClick={this.playByIndex(index)}>
                {this.props.player.isPlaying &&
                this.props.player.index === index ? (
                  <img src="/images/open-book.png" />
                ) : (
                  <img src="/images/play.png" />
                )}
              </button>
            ) : (
              <button onClick={this.openModal(index)}>
                <img src="/images/open-book.png" />
              </button>
            )}
          </div>
        ))}
        {!this.props.player.closePlayer && (
          <Player playlists={this.props.transPrayers} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transPrayers: state.transPrayers,
  player: state.player,
  modal: state.modal
});

const mapDispatchToProps = dispatch => ({
  setIndex: index => dispatch(setIndex(index)),
  setPlaying: isPlaying => dispatch(setPlaying(isPlaying)),
  closePlayer: isClose => dispatch(closePlayer(isClose)),
  openLyricModal: isOpen => dispatch(openLyricModal(isOpen))
});

export default connect(mapStateToProps, mapDispatchToProps)(TransPrayerList);
