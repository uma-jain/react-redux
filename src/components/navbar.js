import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = props => {
  return (
    <nav className="nav-wrapper blue darken-0">
      <div className="container">
        <Link className="brand-logo left " to="/">
          Uma Jain
        </Link>
        <ul className="right">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
