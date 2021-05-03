
import './App.css';
import Header from './Header'
import Login from './Login'
import Home from './Home'
import Checkout from './Checkout'
 import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route  exact path="/cart" component={Checkout}>
        <Header/>
        <Checkout/>
        </Route>
        <Route path="/login" component={Login}>
          <Login/>
          </Route>
          <Route path="/">
            <Header/>
          <Home/>
        </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
