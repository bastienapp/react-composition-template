import React from 'react';
import Product from '../../../util/Product';
import MainLayout from '../../layouts/MainLayout';
import ProductItem from './ProductItem';

const products = [
  new Product(1, 'Product 1'),
  new Product(2, 'Product 2'),
  new Product(3, 'Product 3'),
  new Product(4, 'Product 4'),
];

function ProductList() {
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

export default ProductList;
