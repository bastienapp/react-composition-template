import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from '../../layouts/MainLayout';
import ProductItem from './ProductItem';
import Product from '../../../util/Product';

function ProductList({ products }) {
  return (
    <MainLayout>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </MainLayout>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.instanceOf(Product)).isRequired,
};

export default ProductList;
