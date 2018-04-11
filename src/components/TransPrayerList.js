import React from 'react';
import { connect } from 'react-redux';
import TransPrayerListItem from './TransPrayerListItem';
import Player from './Player';

const TransPrayerList = (props) => (
  <div>
    {props.transPrayers.map((tranPrayer, index) => 
      <TransPrayerListItem 
        key={index}
        {...tranPrayer}
      />
    )}
    <Player playlists={props.transPrayers} />
  </div>
);

const mapStateToProps = (state) => ({
  transPrayers: state.transPrayers
});

export default connect(mapStateToProps)(TransPrayerList);