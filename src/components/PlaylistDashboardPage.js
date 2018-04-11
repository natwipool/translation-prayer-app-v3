import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistList from './PlaylistList';

const PlaylistDashboardPage = () => (
  <div>
    <h1>รายการสวดมนต์</h1>
    <Link to="/create"> 
      สร้างรายการสวดมนต์
    </Link>
    <PlaylistList />
  </div>
)

export default PlaylistDashboardPage;