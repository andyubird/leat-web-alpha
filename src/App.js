import { useEffect } from "react";
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
  const routeMatch = useRouteMatch(["/overall", "/sector", "/"]);
  const currentTab = routeMatch?.path;

  return (
    <Tabs
      value={currentTab}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example"
    >
      <Tab label="首頁" value="/" to="/" component={Link} />
      <Tab
        label="整體用電分析"
        value="/overall"
        to="/overall"
        component={Link}
      />
      <Tab label="部門用電分析" value="/sector" to="/sector" component={Link} />
    </Tabs>
  );
}

export default function App() {
  useEffect(() => {
    const ele = document.getElementById("ipl-progress-indicator");
    if (ele) {
      // fade out
      ele.classList.add("available");
      setTimeout(() => {
        // remove from DOM
        ele.outerHTML = "";
      }, 2000);
    }
  });

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
