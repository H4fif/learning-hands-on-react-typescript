import React from "react";
import "./App.css";
import ProjectsPage from "./projects/ProjectsPage";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./home/HomePage";

function App() {
  return (
    <Router>
      <header className="sticky">
        <Link to="/">
          <span className="logo">
            <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
          </span>
        </Link>

        <NavLink to="/" className="button rounded">
          <span className="icon-home"></span>
          Home
        </NavLink>

        <NavLink to="/projects" className="button rounded">
          Projects
        </NavLink>
      </header>

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
