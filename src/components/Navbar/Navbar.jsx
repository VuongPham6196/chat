import React from 'react';

import './navbar.scss';

import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">VChat</span>
      <div className="userDetail">
        <img
          src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.6435-9/165973108_1836593139823574_4408794443378346655_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3nuX3FWH7JsAX8-grT0&_nc_ht=scontent.fdad1-4.fna&oh=00_AfCVOLClfogVPOCtTB3XbRL3Rk1mcbp130jhSIkUzqja1Q&oe=639C29EE"
          alt="avatar"
          className="userImage"
        />
        <span className="userName">Vuong Pham</span>
        <button
          onClick={() => {
            signOut(auth);
          }}
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
