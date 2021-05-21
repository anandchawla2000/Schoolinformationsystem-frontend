import logo from "../Files/Image/heading.jpg";
import first from "../Files/Image/1stall.png";
import second from "../Files/Image/2nd.png";
import third from "../Files/Image/3rf.png";
import "./design.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faCoffee, faEnvelope, faGem, faHome, faPhone } from '@fortawesome/free-solid-svg-icons'

// Haeder
export const Header = () => {
  return (
    <>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={logo} alt="First slide" />
            <div className="carousel-caption d-none d-md-block" style={{ top: "12%" }}>
              <h5 className="bannerhead" style={{ color: "black" }}>System Information System</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//some more info
export const All = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 col-sm-12 col-lg-4">
            <div className="card" style={{ width: '18rem', border: 'red' }, { margin: 'auto' }}>
              <div className="card-body text-center">
                <img className="rounded-circle border border-primary" src={first} style={{ marginBottom: '20px' }} />
                <h6 className="card-subtitle mb-2 text-muted">Engage Faculty and Students</h6>
                <p className="card-text" style={{ textAlign: "justify" }}>Provide a community for life-long learners with one system for students, faculty, and alumni.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4">
            <div className="card" style={{ width: '18rem', border: 'red' }, { margin: 'auto' }}>
              <div className="card-body text-center">
                <img className="rounded-circle border border-primary" src={second} style={{ marginBottom: '20px' }} />
                <h6 className="card-subtitle mb-2 text-muted">100% Salesforce Native, the World's #1 CRM</h6>
                <p className="card-text" style={{ textAlign: "justify" }}>Tap into the 5000+ add-on Appexchange solutions to get the maximum return on your investment.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-4">
            <div className="card" style={{ width: '18rem', border: 'red' }, { margin: 'auto' }}>
              <div className="card-body text-center">
                <img className="rounded-circle border border-primary" src={third} style={{ marginBottom: '20px' }} />
                <h6 className="card-subtitle mb-2 text-muted">Gain Important Insights</h6>
                <p className="card-text" style={{ textAlign: "justify" }}>Get ahead of your competition with tools to harness your data with advanced analytics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

// Benefits part
export const Benfits = () => {
  return (
    <>
      <div className="container mt-4">
        <div className="headingben text-center">
          <h1 className="benfitshead">Benefits Of Student Management System</h1>
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-6 mt-3">
              <div className="card" style={{ width: '18rem' }, { margin: 'auto' }}>
                <div className="card-body">
                  <h5 className="card-title">For Teachers</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item feat"><span> <FontAwesomeIcon icon={faArrowAltCircleRight} /> </span>Hassle-free student data management</li>
                  <li className="list-group-item feat"><span> <FontAwesomeIcon icon={faArrowAltCircleRight} /> </span>Centralized platform with 100% data security</li>
                  <li className="list-group-item feat"><span> <FontAwesomeIcon icon={faArrowAltCircleRight} /> </span>AI-powered dashboards for student progress analysis</li>
                  <li className="list-group-item feat"><span> <FontAwesomeIcon icon={faArrowAltCircleRight} /> </span>Accurate reports on students’ performance.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6 mt-3">
              <div className="card" style={{ width: '18rem' }, { margin: 'auto' }}>
                <div className="card-body">
                  <h5 className="card-title">For Students</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item feat"><span> <FontAwesomeIcon icon={faArrowAltCircleRight} /> </span>Access to student information</li>
                  <li className="list-group-item feat"><span> <FontAwesomeIcon icon={faArrowAltCircleRight} /> </span>Personalized communication with teachers</li>
                  <li className="list-group-item feat"><span> <FontAwesomeIcon icon={faArrowAltCircleRight} /> </span>Instant notification about exams & crucial events</li>
                  <li className="list-group-item feat"><span> <FontAwesomeIcon icon={faArrowAltCircleRight} /> </span>Dashboard to analyze their individual performances</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Footer Part
export const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-light text-muted mt-4">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="" className="mr-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="mr-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="mr-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="mr-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="mr-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="mr-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <span> <FontAwesomeIcon icon={faGem} /> </span>System Information System</h6>
                <p style={{ textAlign: "justify" }}>
                  Student Information System (SIS) or a Student Management System (SMS) is a fully computerized system designed to manage, store, track, retrieve, and analyze student-related data.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Features
                </h6>
                <p>
                  <a href="#!" className="text-reset">Manage Record</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Management</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Chat Box</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Warning</a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Demo</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Contact
                </h6>
                <p><span> <FontAwesomeIcon icon={faHome} /></span> New York, NY 10012, US</p>
                <p>
                  <span> <FontAwesomeIcon icon={faEnvelope} /></span>info@example.com
                 </p>
                <p><span> <FontAwesomeIcon icon={faPhone} /> </span> + 01 234 567 88</p>
                <p><span> <FontAwesomeIcon icon={faPhone} /> </span> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-4">
          © 2021 Copyright:Anand Chawla
        </div>
      </footer>
    </>
  );
}

//testimonial part
export const Testimonial = () => {
  return (
    <>
      <div className='container-fluid mx-auto mt-5 mb-5' style={{ textAlign: "center" }}>
        <div className="hd">Why People Believe in Us</div>
        <p><small className="text-muted">Always render more and better service than <br />is expected of you, no matter what your ask may be.</small></p>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="card col-md-3 col-12">
            <div className="card-content">
              <div className="card-body"> <img className="img" src="https://i.imgur.com/S7FJza5.png" />

                <div className="card-title"> We're Free </div>
                <div className="card-subtitle">
                  <p> <small className="text-muted">We spent thousands of hours creating on algorithm that does this for you in seconds. We collect a small fee from the professional after they meet your</small> </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card col-md-3 col-12 ml-2">
            <div className="card-content">
              <div className="card-body"> <img className="img" src="https://i.imgur.com/xUWJuHB.png" />
                <div className="card-title"> We're Unbiased </div>
                <div className="card-subtitle">
                  <p> <small className="text-muted"> We don't accept ads from anyone. We use actual data to match you who the best person for each job </small> </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card col-md-3 col-12 ml-2">
            <div className="card-content">
              <div className="card-body"> <img className="img rck" src="https://i.imgur.com/rG3CGn3.png" />
                <div className="card-title"> We Guide you </div>
                <div className="card-subtitle">
                  <p> <small className="text-muted">Buying or selling a home is often the largest transaction anyone does in their life. we guide you through the process so that you can be confident in reaching your dream outcome.</small> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}