
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Shared/Footer/Footer';
import Menubar from './components/Shared/Menubar/Menubar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menubar></Menubar>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
