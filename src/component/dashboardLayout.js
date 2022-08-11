
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu } from 'antd';
  import React, { useState } from 'react';
  import {useNavigate} from "react-router-dom";
  import './dashboardLayout.css'
  const { Header, Sider, Content } = Layout;
  
  const DashboardLayout = ({children,menuSelectorIndex}) => {
    const navigate = useNavigate ();
    const [collapsed, setCollapsed] = useState(false);
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[`${menuSelectorIndex}`]}
            items={[
              {
                key: '1',
                icon: <UserOutlined onClick={()=>navigate("/admin/dashboard")}/>,
                label: <h3 onClick={()=>navigate("/admin/dashboard")}  style={{color:"white"}}>Dashboard</h3>,
              },
              {
                key: '2',
                icon: <VideoCameraOutlined onClick={()=>navigate("/admin/users")}/>,
                label: <h3 onClick={()=>navigate("/admin/users")}  style={{color:"white"}}>Manage Users</h3>,
              },
              {
                key: '3',
                icon: <UploadOutlined onClick={()=>navigate("/admin/trips")}/>,
                label: <h3 onClick={()=>navigate("/admin/trips")}  style={{color:"white"}}>Manage Trips</h3>,
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: '80vh',
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  };
  
  export default DashboardLayout;