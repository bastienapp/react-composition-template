import React from 'react';
import Button from './Button';

function PrimaryButton(props) {
  const { children, onClick, type = 'button' } = props;

  return (
    <Button onClick={onClick} className="primary-button" type={type}>
      {children}
    </Button>
  );
}

export default PrimaryButton;
