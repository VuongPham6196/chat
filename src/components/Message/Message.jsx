import React from 'react';
import './message.scss';

const Message = ({ type }) => {
  return (
    <div className={`message ${type}`}>
      <div className="avatar">
        <img
          src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.6435-9/165973108_1836593139823574_4408794443378346655_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3nuX3FWH7JsAX8-grT0&_nc_ht=scontent.fdad1-4.fna&oh=00_AfCVOLClfogVPOCtTB3XbRL3Rk1mcbp130jhSIkUzqja1Q&oe=639C29EE"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="content">
        <p>
          Hello, my name is Vuong. Nice To meet youuu uuu u uuuuuuuuuuuuuuuuuuu
        </p>
        <img
          src="https://scontent.fdad1-4.fna.fbcdn.net/v/t1.6435-9/165973108_1836593139823574_4408794443378346655_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3nuX3FWH7JsAX8-grT0&_nc_ht=scontent.fdad1-4.fna&oh=00_AfCVOLClfogVPOCtTB3XbRL3Rk1mcbp130jhSIkUzqja1Q&oe=639C29EE"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
