import React from 'react';

export const PlayerOptions = props => (
  <div>
    <div>
      <input
        type="checkbox"
        id="close-player"
        onChange={props.onClosePlayer}
      />
      <label htmlFor="close-player">
        <span /> เปิด/ปิด เสียงสวดมนต์
      </label>
    </div>
    
  </div>
);

export default PlayerOptions;
