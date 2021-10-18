
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Shared/Footer/Footer';
import Menubar from './components/Shared/Menubar/Menubar';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Menubar></Menubar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route  path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
