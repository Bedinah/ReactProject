import React from "react";
import Tours from "./tours";
import { Divider, Typography } from "antd";

const { Title } = Typography;

const About = () => (
  <>
    <Title style={{padding:"5rem", textAlign:"center",fontSize:"3.5rem"}}>
      About-Us
    </Title>
    <Divider />

    
        <Title style={{margin:"3rem 10rem", fontSize:"2.5rem"}} >ABOUT AKAGERA BOOKING TOUR</Title>
        <p style={{margin:"3rem 10rem", fontSize:'1.6rem'}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.</p>

      <Title style={{margin:"3rem 10rem", fontSize:"2rem"}} >OUR SERVICES</Title>
      <p style={{margin:"3rem 11rem", fontSize:'1.6rem'}}>
    <ul>
        <li>Hotel</li>
        <li>Restorant</li>
        <li>Hotel</li>
        <li>Restorant</li>
        
    </ul>
     </p>   
  </>
);

export default About;
