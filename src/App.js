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
import {
  Grid,
  Box,
  Tabs,
  Tab,
  CssBaseline,
  Container,
  Link as Lk
} from "@material-ui/core";

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
      </Router>
      <footer>
        <Box bgcolor="text.secondary" color="white">
          <Container p={0}>
            <Grid container>
              <Grid item xs textAlign="center">
                <Lk
                  underline="hover"
                  href="https://www.facebook.com/DENDoENergy/"
                  color="inherit"
                >
                  地方電力分析工具 網頁版 Alpha 0.1 © G100
                </Lk>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </footer>
    </div>
  );
}
