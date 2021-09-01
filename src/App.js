import "./styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Overall from "./Overall/Overall.js";
import Home from "./Home/Home.js";
//import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";

function MyTabs() {
  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch([
    "/overall",
    "/service",
    "/gov",
    "/agri",
    "/industry",
    "/resident",
    "/"
  ]);
  const currentTab = routeMatch?.path;

  return (
    <Tabs
      value={currentTab}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example"
    >
      <Tab label="首頁" value="/" to="/" component={Link} />
      <Tab label="整體" value="/overall" to="/overall" component={Link} />
      <Tab label="服務業" value="/service" to="/service" component={Link} />
      <Tab label="機關" value="/gov" to="/gov" component={Link} />
      <Tab label="農林漁牧業" value="/agri" to="/agri" component={Link} />
      <Tab label="工業" value="/industry" to="/industry" component={Link} />
      <Tab label="住宅" value="/resident" to="/resident" component={Link} />
    </Tabs>
  );
}

export default function App() {
  return (
    <div className="App">
      <Router>
        <CssBaseline />
        <MyTabs />
        <main>
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
        </main>
      </Router>
    </div>
  );
}
