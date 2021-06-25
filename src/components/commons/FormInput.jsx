import React from 'react';
import PropTypes from 'prop-types';
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

FormInput.defaultProps = {
  placeholder: '',
  required: false,
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['email', 'text', 'number']).isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default FormInput;
