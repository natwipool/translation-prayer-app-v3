import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const PlaylistListItem = (props) => (
  <div>
    <Link to={`/playlist/${props.id}`}>
      <h3>{props.description}</h3>
    </Link>
  </div>
)

export default connect()(PlaylistListItem);