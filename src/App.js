import React from "react";
import Home from "../pages/home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../pages/About";
import Examples from "../pages/Examples";

import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <div className="navbar">
            <div className="menu">
              <h3 className="logo">
                Test<span>site</span>
              </h3>
              <div
                className="hamburger-menu"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementsByClassName("container")[0]
                    .classList.toggle("active");
                }}
              >
                <div className="bar" />
              </div>
            </div>
          </div>
          <div
            className="main-container"
            onClick={(e) => {
              e.preventDefault();
              if (
                document
                  .getElementsByClassName("container")[0]
                  .classList.contains("active")
              ) {
                document
                  .getElementsByClassName("container")[0]
                  .classList.toggle("active");
              }
            }}
          >
            <div className="main">
              <header>
                <Switch>
                  <Route exact path="/about">
                    <About />
                  </Route>
                  <Route exact path="/examples">
                    <Examples />
                  </Route>
                  <Route exact path="/home">
                    <Home />
                  </Route>
                  <Route exact path="/">
                    <Home />
                  </Route>
                </Switch>
                <div className="shadow one" />
                <div className="shadow two" />
              </header>
            </div>

            <div className="shadow one" />
            <div className="shadow two" />

            <div
              className="links"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementsByClassName("container")[0]
                  .classList.toggle("active");
              }}
            >
              <ul>
                <Switch>
                  <Route exact path="/home">
                    <li className="active">
                      <Link to="/home">Home</Link>
                    </li>
                    <li>
                      <Link to="/About">About</Link>
                    </li>
                    <li>
                      <Link to="/examples">Covid19</Link>
                    </li>
                  </Route>

                  <Route exact path="/about">
                    <li>
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="active">
                      <Link to="/About">About</Link>
                    </li>
                    <li>
                      <Link to="/examples">Covid19</Link>
                    </li>
                  </Route>

                  <Route exact path="/">
                    <li className="active">
                      <Link to="/home">Home</Link>
                    </li>
                    <li>
                      <Link to="/About">About</Link>
                    </li>
                    <li>
                      <Link to="/examples">Covid19</Link>
                    </li>
                  </Route>
                  <Route exact path="/examples">
                    <li>
                      <Link to="/home">Home</Link>
                    </li>
                    <li>
                      <Link to="/About">About</Link>
                    </li>

                    <li className="active">
                      <Link to="/examples">Covid19</Link>
                    </li>
                  </Route>
                </Switch>
              </ul>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}
