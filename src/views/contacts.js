import React from "react";
import "../views/contacts.css";
import {Typography, Form, Input, InputNumber, Button} from "antd";
import {FacebookOutlined, TwitterOutlined, InstagramOutlined,WhatsAppOutlined,MessageOutlined,LinkedinOutlined} from "@ant-design/icons";

const {Title} = Typography;

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const Contacts = () => {
  return (
    <div className="space-align-container">
        <Title>Get In Touch With Us</Title>


      <div className="space-align-block">
        
            <div className="ico-ns">
              
                <i><p className="pragraph">Phone Number</p></i>
                <div className="icon1">
        <WhatsAppOutlined />
        <p>+250-785994485</p>
        </div> 
        <hr className="aliny"></hr>
        <i><p className="pragraph">General Information</p></i>
        <div className="icon1">
        <MessageOutlined/>
        <p>akageranp@gmail.com</p>
        </div>
        <hr className="aliny"></hr>
        <i><p className="pragraph">Twitter</p></i>
        <div className="icon1">
        <TwitterOutlined />
        <p>AkageraRwanda</p>
        </div>
        <hr className="aliny"></hr>
        <i><p className="pragraph">FaceBook</p></i>
        <div className="icon1">
        <FacebookOutlined />
        <p>AkageraRwanda</p>
        </div>
        <hr className="aliny"></hr>
        <i> <p className="pragraph">Instagram</p></i>
        <div className="icon1">
        <InstagramOutlined />
        <p>AkageraRwanda</p>
        </div>
        <hr className="aliny"></hr>
        <i><p className="pragraph">Linkedin</p></i>
        <div className="icon1">
        <LinkedinOutlined />
        <p>AkageraRwanda</p>
        </div> 
        </div>
        <hr className="alin"></hr>
          <div className="mock-block">
            <Form.Item
              name={["user", "name"]}
              label="Names"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="YourNames" style={{padding:"1.3rem 7rem",borderRadius:"3rem"}} />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[
                {
                  type: "email",
                },
              ]}
            >
              <Input placeholder="YourEmail" style={{padding:"1.3rem 7rem",borderRadius:"3rem"}}  />
            </Form.Item>
            <Form.Item
              name={["user", "age"]}
              label="Age"
              rules={[
                {
                  type: "number",
                  min: 1,
                  max: 99,
                },
              ]}
            >
              <InputNumber placeholder="YourAge" style={{padding:".3rem 4rem",borderRadius:"3rem"}} />
            </Form.Item>
            <Form.Item name={["user", "Message"]} label="Message">
              <Input.TextArea placeholder="Write Here" style={{padding:"1.3rem 7rem",borderRadius:"3rem"}} />
            </Form.Item>
<div className="batoni">
            <Button type="primary" htmlType="Send" style={{ color:"white", borderRadius:"3rem",fontWeight:"500", backgroundColor:"black"}}>
              Send
            </Button>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Contacts;
