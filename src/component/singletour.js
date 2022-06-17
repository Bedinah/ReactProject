import React from "react";
import { Card, Image, Space, Typography,Form, DatePicker,
  Input, Button,Carousel
} from "antd";

const { Text, Title } = Typography;
const SingleTour = ({ data }) => {
  return (
    <div style={{ width: "40rem", height: "auto", padding: "5px" }}>
      <Card>
        <Space direction="vertical">
        <Title level={4} style={{ color: "rgb(138, 118, 8)" }}>
            {data?.title.toUpperCase()}
          </Title>
         <Carousel autoplay>
          <Image
          preview={true}
          src={data?.picture}
          style={{width:"28rem", miHeight:"20rem"}}
          /> 
           
          </Carousel> 
          
          
          <Title level={2} style={{color:"rgb(138, 118, 8)"}}>Areas to visit</Title>
          <Text type="secondary" italic>
          
            <Text> {data?.description}</Text>
          </Text>
          <Space>
            <Text>DueDate:</Text>
            <Text strong> {data?.dueDate}</Text>
          </Space>
          <Space>
             <Text>doneBy:</Text> 
            <Text strong> {data?.doneBy}</Text>
          </Space>

    <Card title="Book Here !" >
        <Space direction="vertical">
          <Form >


<Form.Item label="First Name">
        <Input placeholder="First Name"/>
      </Form.Item>

      <Form.Item label="Second Name">
        <Input placeholder="Second Name"/>
      </Form.Item>

      <Form.Item label="Email">
        <Input placeholder="Email" />
      </Form.Item>

<Form.Item label="Date">
        <DatePicker />
      </Form.Item>
      <div className="btn">
      <Form.Item label="Button">
        <Button style={{color:"rgb(130, 118, 4)", background:"#eaeaea", border:"1.8px solid", borderRadius:"1.8rem"}}>Send Now</Button>
      </Form.Item> </div>
</Form>
        </Space>

    </Card>



        </Space>
      </Card>
    </div>

  );
};

export default SingleTour;
