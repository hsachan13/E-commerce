
import { Route, Switch } from 'react-router';
import './App.css';
import Payment from './components/Cart/PaymentOptions/Payment';
import PaymentPage from './components/Cart/PaymentOptions/PaymentPage';
import PlaceOrder from './components/Cart/Placeholder/Placeholder';
import Shipping from './components/Cart/ShippingDetails/Shipping';
import CartPage from './components/Cart/Shoppingcart/CartHomePage';
import ShoppingTop from './components/Cart/Shoppingcart/ShoppingTop';
import Product from './components/description/product';
import Reviews from './components/description/Review';
import Footer from './components/HomePage/Footer/footer';
import Navbar from './components/HomePage/Header/navbar';
import NavbarPart from './components/HomePage/Header/navbar-2';

import Home from './components/HomePage/Home';
import Main from './components/HomePage/Main/main';
import CartProvider from './components/Store/cartProvider';


function App() {
  return (
    // <Navbar></Navbar>
    <CartProvider>
      <Switch>
    <Route path="/" exact>
    <Home />
    </Route>
    <Route path="/products" exact>
      <NavbarPart />
    <Main/>
    <Footer />
    </Route>
    <Route path="/product/:id" exact>
      <NavbarPart />
      <Product />
      <Reviews />
      <Footer />
    </Route>
    <Route path="/cart" exact>
      <ShoppingTop />
      <CartPage />
      <Footer />
    </Route>
    <Route path="/ship" exact>
      <Shipping />
    </Route>
    <Route path="/payment" exact>
      <PaymentPage />
    </Route>
    <Route path="/confirmation" exact>
      <PlaceOrder />
    </Route>
    </Switch>
    </CartProvider>
  );
}

export default App;
