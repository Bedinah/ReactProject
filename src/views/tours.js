import React, { useState } from "react";
import SingleTour from "../component/singletour";
import allTours from "../assets/data/tours.json";
import { Button, Card, Image, Space, Typography, Drawer } from "antd";

const { Text, Title } = Typography;

const Tours = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [selectedTour, setSelectedTour] = useState();
  return (
    <>
      <div style={{ width: "100%", height: "auto", padding: "10px" }}>
        <Card>
          {allTours.map((Tours) => (
            <Card.Grid style={{ width: "33.3%", minHeight: "30rem" }}>
              <Space direction="vertical">
                <Image
                  preview={true}
                  src={Tours.picture}
                  style={{ width: "35rem", miHeight: "30rem" }}
                />
                <Title level={4} style={{ color: "rgb(130, 118, 4)" }}>
                  {Tours.title.toUpperCase()}
                </Title>
                <Text type="secondary" italic>
                  Akagera National Park lies in eastern Rwanda, hugging the
                  border with Tanzania. It's characterized by woodland, swamps,
                  low mountains and savannah. The varied terrain shelters
                  wildlife including zebras, giraffes, elephants, lions and
                  hundreds of bird species, such as the rare shoebill stork. In
                  the southern part of the park, vast Lake Ihema is home to
                  hippos and crocodiles.
                </Text>
                <Space>
                  <Text>DueDate:</Text>
                  <Text strong> {Tours.dueDate}</Text>
                </Space>
                <div className="btn">
                <Button
                  onClick={() => {
                    setSelectedTour(Tours);
                    setShowDrawer(true);
                  }}
                >
                  Book Now!
                </Button> </div>
              </Space>
            </Card.Grid>
          ))}
        </Card>
      </div>
      <Drawer 
        title="Single Tour!"
        placement="right"
        onClose={() => {
          setShowDrawer(false);
        }}
        visible={showDrawer}
      >
        <SingleTour data={selectedTour} />
      </Drawer>
    </>
  );
};
export default Tours;
