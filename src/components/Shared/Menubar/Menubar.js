import React from "react";
import "./Menubar.css";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { RiHospitalLine } from "react-icons/ri";
import logo from "../../../images/download.webp";
import useAuth from "../../../hooks/useAuth";

const Menubar = () => {

  const { logOutUser, user } = useAuth();
  
  return (
    <Navbar
      className="container-fluid sticky-top bg-white px-5 py-0 navbar"
      variant="light"
      expand="lg"
    >
      <Navbar.Brand href="#">
        <img height="35" src={logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
          {/* Nav Rout link  */}
          <NavLink
            className="nav-item"
            activeClassName="active-nav-item"
            to="/home"
          >
            HOME
          </NavLink>

          <NavLink
            className="nav-item"
            activeClassName="active-nav-item"
            to="/services"
          >
            SERVICES
          </NavLink>
          <NavLink
            className="nav-item"
            activeClassName="active-nav-item"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            className="nav-item"
            activeClassName="active-nav-item"
            to="/contact"
          >
            CONTACT
          </NavLink>
          <NavLink
            className="nav-item d-md-none "
            activeClassName="active-nav-item"
            to="/cart"
          >
            VIEW
          </NavLink>
          {/* navbar icons  */}
        </Nav>
        <div className="d-flex align-items-center ms-auto my-4 my-md-0">
          <h6 className="me-3 fw-bold">{user.displayName}</h6>

          {!user.email ? (
            <NavLink to="/login">
              <button className="hero-btn btn-fill">Login</button>
            </NavLink>
          ) : (
            <button onClick={logOutUser} className="hero-btn btn-fill">Log out</button>
          )}
          
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menubar;
