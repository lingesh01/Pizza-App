import './App.css';
import { AuthContextProvider } from './Context/AuthContext';
import Home from './pages/Home';
import { Switch, Route, Redirect } from "react-router-dom";
import Cart from './pages/Cart/Cart';
import About from './pages/About/About';
import NotFound from './pages/PageNotFound/PageNotFound';
import { BrowserRouter as Routers } from "react-router-dom";
import Auth from "./Auth/AuthMain";
import Return from './pages/Return/Return';
import Protected from './Protected/Protected';



function App() {
  return (

    <AuthContextProvider>
      <Routers>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/signup" />
          </Route>
          <Route path="/signup" >
            <Auth />
          </Route>

          <Route path="/home" exact>
            < Protected>
              <Home />
            </Protected>

          </Route>

          <Route path="/cart" exact >
            <Cart />
          </Route>
          <Route path="/about" exact >
            <About />
          </Route>

          <Route path="/return" exact >
            <Return />
          </Route>


          <Route path="*" exact >
            <NotFound />
          </Route>

        </Switch>
      </Routers>
    </AuthContextProvider>



  );

}

export default App;
