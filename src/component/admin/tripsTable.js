import React  ,{useState} from 'react';
import { Table, Tag, Space } from 'antd';
import trips from "../../assets/data/trips.json";

const columns = [
    {
        title: "Type",
        dataIndex: "type",
        key: "type",
        render: (text) => <a>{text.split(" ")[0]}</a>,
      },

      {
        title: "Gender",
        dataIndex: "gender",
        key: "gender",
      },

      {
        title: "Age",
        dataIndex: "age",
        key: "age",
      },

      {
        title: "Availabe",
        dataIndex: "isAvailable",
        key: "isAvailable",
        render:(text) => <Tag color={text? "blue" : "red"}>{text.toString()}</Tag>
        
      },

      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <a>Activate</a>
            <a>Delete</a>
            <a>View</a>
          </Space>
        ),
      },
     
 
]



const TripsTable=()=> {
    return <Table columns={columns} dataSource={trips}></Table>;
}

export default TripsTable
