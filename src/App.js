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
import ProductDetail from './pages/ProductDetail';
import Footer from './components/Footer/Footer';
import EditProfile from './pages/EditProfile';
import SearchProduct from './components/SearchProduct/SearchProduct';


function App() {
  return (
      <CartProvider>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/checkout">
                <Header />
                <Checkout />
              </Route>
              <Route exact path="/product/search" >
                <Header />
                <SearchProduct />
                <Footer />
              </Route>
              <Route exact path="/product/:productID" >
                <Header />
                <ProductDetail/>
                <Footer />
              </Route>
              <Route exact path="/signIn">
                <Login />
              </Route>
              <Route exact path="/signUp">
                <Signup />
              </Route>
              <Route exact path="/editinfo">
                <Header />
                <EditProfile />
              </Route>
              {/*default route*/}
              <Route exact path="/">
                <DefaultLayout />
              </Route>
            </Switch>
          </div>
        </Router>
    </CartProvider>
    
  );
}

export default App;
