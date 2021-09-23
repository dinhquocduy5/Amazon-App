import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Sign-up/Signup';
import CartProvider from './components/Context/CartContext';
import Checkout from './pages/Checkout';
import UserProvider from './components/Context/UserContext';


function App() {
  
  return (
    <CartProvider>
      <UserProvider>
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
              <Route path="/">
                <Header />
                <Home />
              </Route>
              
            </Switch>
          </div>
        </Router>
      </UserProvider>
    </CartProvider>
    
  );
}

export default App;
