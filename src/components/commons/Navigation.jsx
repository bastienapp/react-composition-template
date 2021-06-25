/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

function Navigation({ children }) {
  return (
    <nav>
      <ul>
        {children.map((link, i) => (
          <li key={i}>{link}</li>
        ))}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navigation;
