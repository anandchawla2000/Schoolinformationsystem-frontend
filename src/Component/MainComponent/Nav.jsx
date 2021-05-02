import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../MainComponent'
import logo from '../MainComponent/heading.jpg';

function Nav() {
  return (
    <>
    <div className="container">
   <nav className="navbar navbar-expand-lg navbar-light nav1">
   <NavLink className="navbar-brand " id="brand1" to="/">SIS</NavLink>
   <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon navitem2"></span>
   </button>
  <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto mr-auto ">
      <NavLink className="nav-link"id="navitem1" to="/">Home</NavLink>
      <NavLink className="nav-link"id="navitem1" to="/service">Service</NavLink>
      <NavLink className="nav-link"id="navitem1" to="/contactus">Contact Us</NavLink>
    </div>
    <div className="form-inline my-2 my-lg-0">
      <NavLink to="/Login"><button className="btn btn-outline-primary" type="button">Login</button></NavLink>
    </div>
  </div>
</nav>
</div>
<div id="carouselExampleSlidesOnly" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src={logo} alt="heading jpg" className="d-block w-100" />
    <div class="carousel-caption d-none d-md-block" id="headigdata">
        <h5 id="heading1">Student Information System</h5> <br></br>
        <p id="heading2">Manage student record</p>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default Nav;
