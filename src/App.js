import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header'
import Banner from './Banner'
import Checkout from './Checkout'
import initialState from './reducer'

function App() {
  return (
    <>
    <Router>
      <div className="App">
      <Switch>
        
        <Route path="/checkout">
        <Header></Header>
          <Checkout></Checkout>
        </Route>

        <Route path="/">
          <Header></Header>
          <Banner></Banner>
        </Route>
      </Switch>
    </div>
    </Router>
    
    </>
  );
}

export default App;
