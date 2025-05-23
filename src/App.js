import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button, Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalApi";
import NotFound from "./views/NotFound";
import Hello from "./views/Hello";
import Project from "./views/Project";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";

initFontAwesome();

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="text-center">
      <p>Please log in to view your project.</p>
      <Button
        color="primary"
        className="btn-margin"
        onClick={() => loginWithRedirect()}
      >
        Log in
      </Button>
    </div>
  );
};

const App = () => {
  const { isAuthenticated, isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/hello" component={Hello} />
            <Route
              path="/project/:projectId"
              render={() => (isAuthenticated ? <Project /> : <LoginButton />)}
            />
            <Route path="/profile" component={Profile} />
            <Route path="/external-api" component={ExternalApi} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
