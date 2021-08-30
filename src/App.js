import "./styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Overall from "./Overall/Overall.js";
import Home from "./Home/Home.js";
import styled from "styled-components";

const NavUnlisted = styled.ul`
  display: space-evenly;

  a {
    text-decoration: none;
  }

  li {
    color: black;
    margin: 0 0.8rem;
    padding: 10px;
    //font-size: 1.3rem;
    //position: relative;
    list-style: none;
    display: inline-block;
  }

  .current {
    li {
      border-bottom: 2px solid black;
    }
  }
`;

export default function App() {
  return (
    <div className="App">
      <h1>地方電力分析工具-網頁版 Alpha 0.1</h1>
      <Router>
        <div>
          <NavUnlisted>
            <NavLink to="/" activeClassName="current" exact>
              <li>首頁</li>
            </NavLink>
            <NavLink to="/overall" activeClassName="current" exact>
              <li>整體售電</li>
            </NavLink>
            <NavLink to="/overall" activeClassName="current" exact>
              <li>服務業售電</li>
            </NavLink>
            <NavLink to="/overall" activeClassName="current" exact>
              <li>機關售電</li>
            </NavLink>
            <NavLink to="/overall" activeClassName="current" exact>
              <li>農林漁牧業售電</li>
            </NavLink>
            <NavLink to="/overall" activeClassName="current" exact>
              <li>工業售電</li>
            </NavLink>
            <NavLink to="/overall" activeClassName="current" exact>
              <li>住宅售電</li>
            </NavLink>
          </NavUnlisted>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/overall">
              <Overall />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
