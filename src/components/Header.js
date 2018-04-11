import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>สวดมนต์แปล</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>คำนำ</NavLink>
    <NavLink to="/trans-prayers" activeClassName="is-active">สารบัญ</NavLink>
    <NavLink to="/playlists" activeClassName="is-active">รายการ</NavLink>
    <NavLink to="/about" activeClassName="is-active">เกี่ยวกับ</NavLink>
  </header>
)

export default Header;