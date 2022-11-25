import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import ChatsList from '../ChatsList/ChatsList';
import { db } from '../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

import './sidebar.scss';
import User from '../User/User';

const Sidebar = () => {
  const [searchName, setSearchName] = useState('');
  const [users, setUsers] = useState([]);

  const [err, setErr] = useState(false);

  const searchHandler = (e) => {
    setSearchName(e.target.value);
  };

  const handKey = (e) => {};

  const selectHandler = () => {
    setSearchName('');
    setUsers([]);
  };

  useEffect(() => {
    const searchFunction = async () => {
      const q = query(
        collection(db, 'users'),
        where('displayName', '==', searchName)
      );

      try {
        const temp = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          temp.push(doc.data());
        });
        if (temp.length > 0) {
          setUsers(temp);
          setErr(false);
        } else {
          setUsers([]);
          setErr(true);
        }
      } catch (err) {
        setErr(true);
      }
    };

    const timer = setTimeout(() => {
      if (searchName != '') {
        searchFunction();
        console.log('chay');
      } else {
        setErr(false);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchName]);

  return (
    <div className="sidebar">
      <div className="top">
        <Navbar />
        <input
          type="text"
          placeholder="Find a User"
          onChange={searchHandler}
          onKeyDown={handKey}
          value={searchName}
        />
        <div className="searchPopup">
          {err && <span>User not found!</span>}
          {users.length > 0 &&
            users.map((user) => {
              return <User data={user} onClick={selectHandler} />;
            })}
        </div>
      </div>
      <div className="bottom">
        <ChatsList onClick={selectHandler} />
      </div>
    </div>
  );
};

export default Sidebar;
