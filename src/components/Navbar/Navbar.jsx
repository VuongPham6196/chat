import React, { useContext } from 'react';

import './navbar.scss';

import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { AuthContext } from '../../context/auth-context';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="logo">VChat</span>
      <div className="userDetail">
        <img src={currentUser.photoURL} alt="avatar" className="userImage" />
        <span className="userName">{currentUser.displayName}</span>
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
