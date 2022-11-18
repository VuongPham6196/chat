import React from 'react';
import cam from '../../assets/images/cam.png';
import add from '../../assets/images/add.png';
import more from '../../assets/images/more.png';
import Message from '../Message/Message';

import './chatcontainer.scss';

const ChatContainer = () => {
  return (
    <div className="chatContainer">
      <div className="chatInfor">
        <span className="friendName">Jane</span>
        <div className="chatIcons">
          <img src={cam} alt="" />
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <div className="messages">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    </div>
  );
};

export default ChatContainer;
