/* eslint-disable react/button-has-type */
import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

function Button(props) {
  const { children, className, type, onClick } = props;

  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  onClick: (event) => event.preventDefault(),
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func,
};

export default Button;
