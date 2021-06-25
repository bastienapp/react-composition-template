import React from 'react';
import Button from './Button';

function SecondaryButton(props) {
  const { children, onClick, type = 'button' } = props;

  return (
    <Button onClick={onClick} className="secondary-button" type={type}>
      {children}
    </Button>
  );
}

export default SecondaryButton;
