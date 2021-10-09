import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header/Header';
import DefaultLayout from './pages/DefaultLayout';
import Login from './pages/Login'
import Signup from './pages/SignUp'
import Checkout from './pages/Checkout';

import CartProvider from './components/Context/CartContext';
import SearchProvider from './components/Context/SearchContext';
import ProductDetail from './pages/ProductDetail';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <SearchProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/checkout">
                <Header />
                <Checkout />
              </Route>
              <Route exact path="/product/:productID" >
                <Header />
                <ProductDetail/>
                <Footer />
              </Route>
              <Route path="/signin">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              {/*default route*/}
              
                <Route exact path="/">
                  <DefaultLayout />
                </Route>
            </Switch>
          </div>
        </Router>
    </CartProvider>
    </SearchProvider>
    
  );
}

export default App;
