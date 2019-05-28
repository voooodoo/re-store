import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';

import './app.css';

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={200} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart-page" component={CartPage} />
      </Switch>
    </main>
  );
};

export default App;
