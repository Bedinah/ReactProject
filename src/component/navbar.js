import React from "react";
import logo from "../assets/images/mylogo.jpg";
import "../component/Nav.css";
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { borderColor } from "@mui/system";
import SignIn from "./signIn";
    
const Nav=()=>{
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };
    return ( 
       <>
      <div className="nav">
          <img src={logo} alt="Rwanda Booking Tour"  className="logo-img"/> 
          <div className="navigation-links">
              <ul className="nav-links">
                  <li><a href="/" className="nav-link">HOME</a></li>
                  <li><a href="aboutUs" className="nav-link">ABOUT-US</a></li>
                  <li><a href="contacts" className="nav-link">CONTACT-US</a></li>
                  <li><a href="gallery" className="nav-link">GALLERY</a></li>
                  <li><a href="tours" className="nav-link btn">TOURS</a></li>
                  
     <Button style={{color:"rgb(138, 118, 8)",borderColor:"#ffd740"}} onClick={showModal} >
        SIGN-IN
      </Button> 
      <Modal title="SignIn Here" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
     
<SignIn></SignIn>

      </Modal>

              </ul>
          </div>
      </div> 
      </>
    )
}
export default Nav;

