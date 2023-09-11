import React from "react";

const Navbar = () => {
  const navh = {
    height:"40px"
  }
  return (
    <div>
        {/* <h2>Navbar</h2>
        <div className="d-flex bg-white justify-content-between align-items-center px-5" style={navh}>
          <img src={require("./images/co.jpg")} alt="" className="h-100"/>
          <div className="g-z-3 row">
            <div className="col"><a href="#about" className="text-decoration-none link-opacity-50-hover fw-bold">About<i className="icofont-simple-down"></i></a></div>
            <div className="col"><a href="#about" className="text-decoration-none link-opacity-50-hover fw-bold">Programmes<i className="icofont-simple-down"></i></a></div>
            <div className="col"><a href="#about" className="text-decoration-none link-opacity-50-hover fw-bold">Admissions<i className="icofont-simple-down"></i></a></div>
            <div className="col"><a href="#about" className="text-decoration-none link-opacity-50-hover fw-bold">E-Portal<i className="icofont-simple-down"></i></a></div>
            <div className="col"><a href="#about" className="text-decoration-none link-opacity-50-hover fw-bold">SQI Scholarship</a></div>
            <div className="col"><a href="#about" className="text-decoration-none link-opacity-50-hover fw-bold">News</a></div>
          </div>
        </div> */}
        <nav className="navbar bg-body-light justify-content-evenly border-bottom border-1 border-dark-subtle py-0 startnav">
          <a className="navbar-brand w-25 pt-0" href="#">
            <img src={require("./images/co.jpg")} alt="SQI" height={60}/>
          </a>
          <div className="bg-white nav rightnav">
            <li className="nav-item fw-bold parentdrop">
              <a href="#" className="nav-link dropdown-toggle">About</a>
              <div className="list-group unseendrop bg-white">
                <a href="#" className="list-group-item list-group-item-action border-0 list-group-item-light">Our Story</a>
                <a href="#" className="list-group-item list-group-item-action border-0 list-group-item-light">Our Team</a>
                <a href="#" className="list-group-item list-group-item-action border-0 list-group-item-light">Our Campus</a>
              </div>
            </li>
            <li className="nav-item fw-bold parentdrop">
              <a href="#" className="nav-link dropdown-toggle">Programmes</a>
              <div className="list-group unseendrop bg-white">
                <a href="#" className="list-group-item list-group-item-action border-0 list-group-item-light">National Information Diploma</a>
                <a href="#" className="list-group-item list-group-item-action border-0 list-group-item-light">Professional Diploma Programme</a>
                <a href="#" className="list-group-item list-group-item-action border-0 list-group-item-light">Executive Professional Certificate Programme</a>
              </div>
            </li>
            <li className="nav-item fw-bold parentdrop">
              <a href="#" className="nav-link dropdown-toggle">Admissions</a>
              <div className="list-group unseendrop bg-white">
                <a href="#" className="list-group-item list-group-item-action border-0 list-group-item-light">Apply for a programme</a>
                <a href="#" className="list-group-item list-group-item-action border-0 list-group-item-light">Mode of Study</a>
                <a href="#" className="list-group-item list-group-item-action border-0 list-group-item-light">Tuition</a>
                <a href="#" className="list-group-item list-group-item-action border-0 list-group-item-light">Frequently Asked Questions</a>
              </div>
            </li>
            <li className="nav-item fw-bold parentdrop">
              <a href="#" className="nav-link dropdown-toggle">E-Portal</a>
              <div className="list-group unseendrop bg-white">
                <a href="#" className="list-group-item list-group-item-action border-0 list-group-item-light">Student</a>
                <a href="#" className="list-group-item list-group-item-action border-0 list-group-item-light">Staff</a>
              </div>
            </li>
            <li className="nav-item fw-bold parentdrop">
              <a href="#" className="nav-link">SQI Scholarship</a>
            </li>
            <li className="nav-item fw-bold parentdrop">
              <a href="#" className="nav-link">News</a>
            </li>
          </div>
        </nav>
    </div>
  )
}

export default Navbar