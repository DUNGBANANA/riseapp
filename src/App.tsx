
import "./App.css";
import HomePage from "./pages/home";
import Recruitment from "./pages/recruitment";
import AboutUs from './pages/AboutUs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/recruitment">recruitment</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/recruitment">
              <Recruitment />
            </Route>
            <Route path="/about">
              <AboutUs/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
