import React, { useState, useEffect } from "react";
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SubmitDocuments from './pages/submit-documents'
import routes from '@/router';
import './App.scss';

const { Header, Content, Footer, Sider } = Layout;

function App() {

  return (
    <Router>
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/submit-documents">提交文档</Link>
        </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to="/consult-documents">查询文档</Link>
        </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
          <Link to="/get-documents">获取文档</Link>
        </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <div className="content">
            {/* <Route path='/' exact component={SubmitDocuments} /> */}
            {routes.map((routeConfig: any, index: number) => (
            <Route exact key={index} path={routeConfig.path} component={routeConfig.component} />  
            ))}
          </div>
        </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
    </Router>
  )
}

export default App
