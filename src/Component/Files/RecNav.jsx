import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './file.css'

function RecNav() {
  return (
    < >
     <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <NavLink className="navbar-brand" to="/">SIS</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ml-auto">
      <li className="nav-item">
        <NavLink exact activeClassName="active_class"  className="nav-link" to="/">Add Teacher</NavLink>
      </li>
      <li className="nav-item">
        <NavLink  exact activeClassName="active_class"  className="nav-link" to="/addstudent">Add Student</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact activeClassName="active_class"  className="nav-link" to="/searchstudent">Search</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact activeClassName="active_class"  className="nav-link" to="/logout">Logout</NavLink>
      </li>
    </ul>
  </div>
</nav> 
    </>
  );
}

export default RecNav;
