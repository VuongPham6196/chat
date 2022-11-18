import React from 'react';
import './user.scss';

const User = () => {
  return (
    <div className="user">
      <img
        src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.6435-9/165973108_1836593139823574_4408794443378346655_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3nuX3FWH7JsAX8-grT0&_nc_ht=scontent.fdad1-4.fna&oh=00_AfCVOLClfogVPOCtTB3XbRL3Rk1mcbp130jhSIkUzqja1Q&oe=639C29EE"
        alt="avatar"
      />
      <div className="content">
        <span className="name">Vuong</span>
        <span className="lastMessage">hello</span>
      </div>
    </div>
  );
};

export default User;
