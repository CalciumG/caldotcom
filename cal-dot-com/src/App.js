import React, { useState } from "react";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";
import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import { Layout, Menu } from "antd";

const { Content, Footer } = Layout;

const App = () => {
  const [current, setcurrent] = useState(true);

  const handleClick = (e) => {
    console.log("click ", e);
    setcurrent({ current: e.key });
  };

  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        <Layout>
          <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <Menu.Item key="mail" icon={<MailOutlined />}>
              Navigation One
            </Menu.Item>
            <Menu.Item key="app" icon={<AppstoreOutlined />}>
              Navigation Two
            </Menu.Item>
            <Menu.Item key="alipay">Navigation Four - Link</Menu.Item>
          </Menu>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: "100%" }}
            >
              <About />
              <Projects />
              <Skills />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
