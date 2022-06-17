import React from "react";
import logo from "../assets/images/mylogo.jpg";
import "../component/Nav.css";


const Nav=()=>{
    return ( 
        <>
      <div className="nav">
          <img src={logo} alt="Rwanda Booking Tour"  className="logo-img"/> 
          <div className="navigation-links">
              <ul className="nav-links">
                  <li><a href="/" className="nav-link">HOME</a></li>
                  <li><a href="" className="nav-link">ABOUT-US</a></li>
                  <li><a href="contacts" className="nav-link">CONTACT-US</a></li>
                  <li><a href="" className="nav-link">GALLERY</a></li>
                  <li><a href="" className="nav-link link-green">SIGN-IN</a></li>
                  <li><a href="tours" className="nav-link btn">TOURS</a></li>
                  
              </ul>
          </div>
      </div> 
      </>
    )
}
export default Nav;

