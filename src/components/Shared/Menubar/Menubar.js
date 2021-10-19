import React from "react";
import "./Menubar.css";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/logo.png";
import useAuth from "../../../hooks/useAuth";
import { HashLink } from "react-router-hash-link";

const Menubar = () => {

  const { logOutUser, user } = useAuth(); 
  
  return (
    <Navbar
      id='navbar'
      className="container-fluid sticky-top bg-white px-5 py-0 navbar"
      variant="light"
      expand="lg"
    >
      <Navbar.Brand href="#">
        <img height="40" src={logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
          {/* Nav Rout link  */}
          <HashLink
            className="nav-item"
            to="/home#home"
          >
            Home
          </HashLink>

          <HashLink
            className="nav-item"
            to="/home#service"
          >
            Services
          </HashLink>
          <HashLink
            className="nav-item"
            to="/appointment#appointment"
          >
            Appointment
          </HashLink>
          <HashLink
            className="nav-item"
            to="/about#about"
          >
            About
          </HashLink>
          
        </Nav>
        <div className="d-flex align-items-center ms-auto my-4 my-md-0 nav-login">
          <h6 className="me-3 mt-1 fw-bold">{user.displayName}</h6>

          
          {/* login and logout toggle render  */}
          {!user.displayName ? (
            <HashLink to="/login#login">
              <button className="hero-btn btn-fill">Login</button>
            </HashLink>
          ) : (
            <button onClick={logOutUser} className="hero-btn btn-fill">
              Log out
            </button>
          )}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menubar;
