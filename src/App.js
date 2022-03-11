import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Blogs from './Pages/Blogs/Blogs';
import Banner from './Pages/Home/Banner/Banner';
import  NotFound  from './Pages/NotFound/NotFound';
import Projects1Details from './Pages/Details/Project1Details/Projects1Details';
import Projects2Details from './Pages/Details/Projects2Details/Projects2Details';
import Projects3Details from './Pages/Details/Projects3Details/Projects3Details';


function App() {
  return (
   <div style={{ backgroundColor: "black", color: "white" }}>
      <Router>
        <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/about">
            <Banner></Banner>
          </Route>
          <Route path="/project1">
            <Projects1Details></Projects1Details>
          </Route>
          <Route path="/project2">
            <Projects2Details></Projects2Details>
          </Route>
          <Route path="/project3">
            <Projects3Details></Projects3Details>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
   </div>
  );
}

export default App;
