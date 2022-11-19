
import React from 'react';
import Navbar from '../Navbar/Navbar';
import ListFriend from '../ListFriend/ListFriend';

import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Navbar />
        <input type="text" placeholder="Find a User" />
      </div>
      <div className="bottom">
        <ListFriend />
      </div>
    </div>
  );
};

export default Sidebar;
