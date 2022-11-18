import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './form.scss';
import addAvatar from '../../assets/images/addAvatar.png';

const Form = () => {
  const location = useLocation();
  console.log(location);
  const [isLogin, setIsLogin] = useState(
    location.pathname === '/login' ? true : false
  );

  return (
    <div className="formContainer">
      <span className="logo">V Chat</span>
      <span className="title">{isLogin ? 'Login' : 'Register'}</span>
      <form>
        {!isLogin && <input type="text" placeholder="display name" />}
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        {!isLogin && (
          <>
            <label htmlFor="file">
              <img src={addAvatar} />
              <span></span>
              Add an avatar
            </label>
            <input style={{ display: 'none' }} type="file" id="file" />
          </>
        )}

        <button>{isLogin ? 'Login' : 'Sign Up'}</button>
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
