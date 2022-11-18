import React from 'react';
import ChatContainer from '../components/ChatPanel/ChatContainer';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <ChatContainer />
    </div>
  );
};

export default Home;
