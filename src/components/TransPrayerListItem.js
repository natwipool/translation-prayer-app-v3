import React from 'react';

const TransPrayerListItem = ({ precept, category }) => (
  <div>
    <h3>{precept}</h3>
    <p>{category}</p>
  </div>
)

export default TransPrayerListItem;