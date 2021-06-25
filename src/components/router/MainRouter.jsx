import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from '../views/Contact';
import Home from '../views/Home';
import ProductList from '../views/ProductListView/ProductList';
import Product from '../../util/Product';

function MainRouter() {
  const products = [
    new Product(1, 'Product 1'),
    new Product(2, 'Product 2'),
    new Product(3, 'Product 3'),
    new Product(4, 'Product 4'),
  ];

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <ProductList products={products} />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default MainRouter;
