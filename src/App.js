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
            <Route exact path='/fooddetails/:foodId'>
              <FoodDetails></FoodDetails>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
