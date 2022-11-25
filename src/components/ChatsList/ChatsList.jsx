import React, { useContext, useEffect, useState } from 'react';
import './chatslist.scss';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import User from '../User/User';
import { AuthContext } from '../../context/auth-context';

const ChatsList = ({ onClick }) => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  console.log(chats);

  return (
    <div className="chatsListContainer">
      <div className="chatsList">
        {Object.entries(chats).map((chat) => (
          <User data={chat[1].userInfo} onClick={onClick} />
        ))}
      </div>
    </div>
  );
};

export default ChatsList;
