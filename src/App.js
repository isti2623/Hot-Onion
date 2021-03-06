import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FoodDetails from './components/FoodDetails/FoodDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Cart from './components/Cart/Cart';
import NotFound from './components/NotFound/NotFound';



function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute exact path='/fooddetails/:foodId'>
              <FoodDetails></FoodDetails>
            </PrivateRoute>
            <PrivateRoute exact path='/cart'>
              <Cart></Cart>
            </PrivateRoute>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
