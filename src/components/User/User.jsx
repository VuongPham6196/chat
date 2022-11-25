import React, { useContext } from 'react';
import './user.scss';

import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { AuthContext } from '../../context/auth-context';

const User = ({ data, onClick }) => {
  const { currentUser } = useContext(AuthContext);

  const handSelect = async () => {
    console.log('clicked');
    const combindedID =
      currentUser.uid > data.uid
        ? currentUser.uid + data.uid
        : data.uid + currentUser.uid;
    const res = await getDoc(doc(db, 'chats', combindedID));

    if (!res.exists()) {
      // create a chat in chats collection
      await setDoc(doc(db, 'chats', combindedID), { messages: [] });

      // create an user chats
      await updateDoc(doc(db, 'userChats', currentUser.uid), {
        [combindedID + '.userInfo']: {
          uid: data.uid,
          displayName: data.displayName,
          photoURL: data.photoURL,
        },
        [combindedID + '.date']: serverTimestamp(),
      });

      await updateDoc(doc(db, 'userChats', data.uid), {
        [combindedID + '.userInfo']: {
          uid: currentUser.uid,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
        },
        [combindedID + '.date']: serverTimestamp(),
      });
    }
    onClick();
  };

  return (
    <div className="user" onClick={handSelect}>
      <img src={data.photoURL} alt="avatar" />
      <div className="content">
        <p className="name">{data.displayName}</p>
        {data.lastMessage && (
          <p className="lastMessage">hello asdsad</p>
        )}
      </div>
    </div>
  );
};

export default User;
