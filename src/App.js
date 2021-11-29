import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
   <div>
      <Router>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
   </div>
  );
}

export default App;
