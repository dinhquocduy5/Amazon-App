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
              <Route path="/signin">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              {/*default route*/}
              <SearchProvider>
                <Route path="/">
                  <DefaultLayout />
                </Route>
              </SearchProvider>
            </Switch>
          </div>
        </Router>
    </CartProvider>
  );
}

export default App;
