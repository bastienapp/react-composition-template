import React from 'react';
import './FormInput.css';

function FormInput({
  name,
  type,
  text,
  placeholder,
  value,
  onChange,
  required,
}) {
  return (
    <label className="FormInput" htmlFor={name}>
      <span>{text}: </span>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </label>
  );
}

export default FormInput;
