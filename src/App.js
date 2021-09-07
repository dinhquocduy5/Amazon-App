import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route path="/">
            <Header />
            <h1>Hello Home Page</h1>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
