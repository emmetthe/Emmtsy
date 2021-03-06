import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Link } from 'react-router-dom';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import GreetingContainer from './greeting/greeting_container';
import ProductShowContainer from './product/product_show_container';
import Modal from './modal/modal';
import HomeContainer from './home/home_container';
import CartContainer from './cart/cart_container';
import CategoryContainer from './category/category_container';
import SearchContainer from './search/search_container';
import Footer from './footer/footer';
import CategoryIndexContainer from './category/category_index_container';

const App = () => (
  <div className="app">
    <Modal />
    <GreetingContainer />
    <CategoryContainer />
    <Switch>
      <Route exact path="/products/:productId" component={ProductShowContainer} />
      <Route exact path="/search" component={SearchContainer} />
      <Route exact path="/categories/:id" component={CategoryIndexContainer} />
      <ProtectedRoute exact path="/cart" component={CartContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={HomeContainer} />
    </Switch>
    <Footer />
  </div>
);

export default App;
