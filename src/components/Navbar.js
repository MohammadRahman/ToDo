import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container">
          <a href="" className="navbar-brand">
            Todo List
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/addNew" className="nav-link">
                <i className="fas fa-plus"></i> Add
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
