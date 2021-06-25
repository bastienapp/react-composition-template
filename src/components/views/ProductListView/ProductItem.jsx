import React from 'react';
import PropTypes from 'prop-types';

function ProductItem({ name }) {
  return (
    <li>
      <span>{name}</span>
    </li>
  );
}

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProductItem;
