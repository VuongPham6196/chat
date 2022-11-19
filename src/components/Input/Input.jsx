import React from 'react';
import img from '../../assets/images/img.png';
import attach from '../../assets/images/attach.png';

import './input.scss';

const Input = () => {
  return (
    <form className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <input type="file" style={{ display: 'none' }} id="file" />
        <label htmlFor="file">
          <img src={attach} alt="file" />
        </label>
        <input type="file" style={{ display: 'none' }} id="file1" />
        <label htmlFor="file1">
          <img src={img} alt="file1" />
        </label>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

export default Input;
