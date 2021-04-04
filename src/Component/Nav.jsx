import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../Component/design.css'
import logo from '../Component/heading.jpg';

function Nav() {
  return (
    <>
    <div className="container">
   <nav className="navbar navbar-expand-lg navbar-light nav1">
  <a className="navbar-brand " id="brand1" href="#">SIS</a>
  <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon navitem2"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto mr-auto ">
      <a className="nav-link"id="navitem1" href="#">Home</a>
      <a className="nav-link"id="navitem1" href="#">Service</a>
      <a className="nav-link"id="navitem1" href="#">Contact Us</a>
    </div>
    <div className="form-inline my-2 my-lg-0">
      <button className="btn btn-outline-primary" type="button">Login</button>
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
