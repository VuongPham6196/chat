import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import './form.scss';

import addAvatar from '../../assets/images/addAvatar.png';

import { auth, db, storage } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';


const Form = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(
    location.pathname === '/login' ? true : false
  );
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const submitRegisterHandler = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            // Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            //create user on firestore
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, 'userChats', res.user.uid), {});

            navigate('/');
          } catch (err) {
            console.log(err);
            setIsError(true);
          }
        });
      });
      setIsError(false);
      setErrorMsg(null);
    } catch (err) {
      setIsError(true);
      setErrorMsg(err.message);
    }
  };

  const submitLoginHandler = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
      setIsError(false);
    } catch (err) {
      setIsError(true);
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="formContainer">
      <span className="logo">V Chat</span>
      <span className="title">{isLogin ? 'Login' : 'Register'}</span>
      <form onSubmit={isLogin ? submitLoginHandler : submitRegisterHandler}>
        {!isLogin && <input type="text" placeholder="display name" />}
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        {!isLogin && (
          <>
            <label htmlFor="file">
              <img src={addAvatar} alt="" />
              <span></span>
              Add an avatar
            </label>
            <input style={{ display: 'none' }} type="file" id="file" />
          </>
        )}

        <button>{isLogin ? 'Login' : 'Sign Up'}</button>
        {isError && <span style={{ color: 'red' }}>{errorMsg}</span>}
      </form>
      <span className="switchPage">
        {isLogin ? 'You don`t have an account? ' : 'You do have an account? '}
        {isLogin && <Link to={'/register'}>Register</Link>}
        {!isLogin && <Link to={'/login'}>Login</Link>}
      </span>
    </div>
  );
};

export default Form;
