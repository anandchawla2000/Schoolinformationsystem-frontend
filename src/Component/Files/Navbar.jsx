import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./file.css";
import { contextUser } from "../MainComponent/Mainnav";
const Navbar = () => {
  const { state, dispatch } = useContext(contextUser);
  if (state === "Adminlogin") {
    //Admin Navbar
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white navcolor">
          <NavLink className="navbar-brand" to="#">
            SIS
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ml-auto">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_class"
                  className="nav-link"
                  to="/addteacher"
                >
                  Add Teacher
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_class"
                  className="nav-link"
                  to="/addstudent"
                >
                  Add Student
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_class"
                  className="nav-link"
                  to="/searchstudent"
                >
                  Search
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_class"
                  className="nav-link"
                  to="/List"
                >
                  List
                </NavLink>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              <NavLink exact to="/logout">
                <button className="btn btn-outline-primary" type="button">
                  Logout
                </button>
              </NavLink>
            </div>
          </div>
        </nav>
      </>
    );
  } else if (state === "teacherlogin") {
    //Teacher navbar
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white navcolor">
          <NavLink className="navbar-brand" to="#">
            SIS
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ml-auto">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_class"
                  className="nav-link"
                  to="/profile"
                >
                  Update Records
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_class"
                  className="nav-link"
                  to="/search"
                >
                  Search Student
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_class"
                  className="nav-link"
                  to="/studentlist"
                >
                  Student List
                </NavLink>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              <NavLink exact to="/logout">
                <button className="btn btn-outline-primary" type="button">
                  Logout
                </button>
              </NavLink>
            </div>
          </div>
        </nav>
      </>
    );
  }

  //Student Navbar
  else if (state === "Studentlogin") {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white navcolor">
          <NavLink className="navbar-brand" to="#">
            SIS
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ml-auto">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_class"
                  className="nav-link"
                  to="/information"
                >
                  Information
                </NavLink>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              <NavLink exact to="/logout">
                <button className="btn btn-outline-primary" type="button">
                  Logout
                </button>
              </NavLink>
            </div>
          </div>
        </nav>
      </>
    );
  }
  //Default navabar
  else {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white navcolor">
          <NavLink className="navbar-brand" to="#">
            SIS
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ml-auto">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_class"
                  className="nav-link"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              <NavLink exact to="/Login">
                <button className="btn btn-outline-primary" type="button">
                  Login
                </button>
              </NavLink>
            </div>
          </div>
        </nav>
      </>
    );
  }
};

export default Navbar;
