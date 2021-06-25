/* eslint-disable react/button-has-type */
import React from 'react';
import './Button.css';

function Button(props) {
  const { children, className, type = 'button', onClick } = props;

  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
