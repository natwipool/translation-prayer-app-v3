import React from 'react';
import { connect } from 'react-redux';
import raf from 'raf';
import ReactHowler from 'react-howler';
import {
  incrementIndex,
  decrementIndex,
  isPlayingToggle,
  setPlaying,
  setIndex
} from '../actions/player';
import formatTime from '../utils/format-time';

export class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      duration: undefined,
      seek: 0
    };

    this.playlists = this.props.playlists.map(
      ({ filename, precept, duration }) => ({
        ogg: `https://s3-ap-southeast-1.amazonaws.com/transprayer/ogg/${filename}.ogg`,
        mp3: `https://s3-ap-southeast-1.amazonaws.com/transprayer/mp3/${filename}.mp3`,
        precept,
        duration
      })
    );
  }

  componentWillUnmount() {
    this.clearRAF();
    this.props.setIndex();
    this.props.setPlaying(false);
  }

  isPlayingToggle = () => {
    this.props.isPlayingToggle();
  };

  onPrevClick = () => {
    this.clearRAF();
    this.props.decrementIndex();
    console.log(this.props.player.index)
  };

  onNextClick = () => {
    this.clearRAF();
    this.props.incrementIndex();
    console.log(this.props.player.index)
  };

  handleOnPlay = () => {
    this.renderSeekPos();
  };

  handleOnLoad = () => {
    this.setState({
      loaded: true,
      duration: this.player.duration()
    });
  };

  handleOnEnd = () => {
    if (this.props.player.index + 1 >= this.props.playlists.length) {
      this.props.setIndex();
      this.props.setPlaying(false);
    } else {
      this.clearRAF();
      this.props.incrementIndex();
      this.props.setPlaying(true);
    }
  };

  renderSeekPos = () => {
    this.setState({
      seek: this.player.seek()
    });

    if (this.props.player.isPlaying) {
      this._raf = raf(this.renderSeekPos);
    }
  };

  clearRAF = () => {
    raf.cancel(this._raf);
    this.setState(() => ({
      loaded: false,
      seek: 0
    }));
  };

  render() {
    return (
      <div>
        <ReactHowler
          src={[
            this.playlists[this.props.player.index].ogg,
            this.playlists[this.props.player.index].mp3
          ]}
          playing={this.props.player.isPlaying}
          onPlay={this.handleOnPlay}
          onLoad={this.handleOnLoad}
          onEnd={this.handleOnEnd}
          html5={true}
          ref={ref => (this.player = ref)}
        />
        <button
          className="music-button"
          onClick={this.onPrevClick}
          disabled={this.props.player.index === 0}
        >
          <img src="/images/prev.png" />
        </button>
        <button className="music-button" onClick={this.isPlayingToggle}>
          {this.props.player.isPlaying ? (
            <img src="/images/pause.png" />
          ) : (
            <img src="/images/play.png" />
          )}
        </button>
        <button
          className="music-button"
          onClick={this.onNextClick}
          disabled={this.props.player.index === this.playlists.length - 1}
        >
          <img src="/images/next.png" />
        </button>
        {this.playlists && this.state.loaded ? (
          <h3>{this.playlists[this.props.player.index].precept}</h3>
        ) : (
          <h3>กำลังโหลด...</h3>
        )}
        <p>
          {this.state.loaded ? formatTime(this.state.seek) : '0.00'}
          {' / '}
          {this.state.loaded
            ? formatTime(this.playlists[this.props.player.index].duration)
            : '0.00'}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  player: state.player
});

const mapDispatchToProps = (dispatch, props) => ({
  incrementIndex: () => dispatch(incrementIndex()),
  decrementIndex: () => dispatch(decrementIndex()),
  isPlayingToggle: () => dispatch(isPlayingToggle()),
  setPlaying: boo => dispatch(setPlaying(boo)),
  setIndex: index => dispatch(setIndex(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
