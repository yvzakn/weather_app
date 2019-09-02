import { Layout, Menu, Icon, Switch } from "antd";
import React from "react";
import PopularCities from "./modules/PopularCities";

const { Header, Sider, Content } = Layout;

class AppLayout extends React.Component {
  state = {
    collapsed: false,
    isMetric: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  unitChange = checked => {
    console.log("checked", checked);
    this.setState({ isMetric: checked });
  };

  render() {
    const { isMetric } = this.state;
    return (
      <Layout style={{ height: "100%" }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon style={{ fontSize: "20px" }} type="ant-cloud" />
              <span>Popular Cities</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <p
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                padding: "10px"
              }}
            >
              <Switch
                onChange={this.unitChange}
                style={{ minWidth: "75px" }}
                checkedChildren="Metric"
                unCheckedChildren="Imperial"
              />
            </p>
            {/* <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            /> */}
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            <PopularCities isMetric={isMetric} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default AppLayout;
