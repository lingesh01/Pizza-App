import './App.css';
import Home from './pages/Home';
import { Switch, Route, Redirect } from "react-router-dom";
import Cart from './pages/Cart/Cart';
import About from './pages/About/About';
import NotFound from './pages/PageNotFound/PageNotFound';
import { BrowserRouter as Routers } from "react-router-dom";

function App() {
  return (
    <Routers>
      <Switch>
        <Route path="/home" exact>
          <Redirect to="/" />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart" exact >
          <Cart />
        </Route>
        <Route path="/about" exact >
          <About />
        </Route>
        <Route path="*" exact >
          <NotFound />
        </Route>
      </Switch>
    </Routers>
  );

}

export default App;
