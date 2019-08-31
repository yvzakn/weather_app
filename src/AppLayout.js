import { Layout, Menu, Icon, Button } from 'antd';
import React from 'react';
import tr from './assets/flags/tr.png';
import eng from './assets/flags/eng.png';
import fr from './assets/flags/fr.png';

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout style={{height:'100%'}}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon style={{fontSize: '20px'}} type="ant-cloud" />
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
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            <Button type="primary" style={{minWidth: '120px'}}>
              <div>
                <img src={tr} style={{height: "60%"}} alt={'no flag'} />
                {' '}
                {'Istanbul'}
              </div>
            </Button>
            <div style={{marginTop: '5px'}}>
            <Button type="primary" style={{minWidth: '120px'}}>
              <div>
                <img src={eng} style={{height: "60%"}} alt={'no flag'} />
                {' '}
                {'London'}
              </div>
            </Button>
            </div>
            <div style={{marginTop: '5px'}}>
            <Button type="primary" style={{minWidth: '120px'}}>
              <div>
                <img src={fr} style={{height: "60%"}} alt={'no flag'} />
                {' '}
                {'Paris'}
              </div>
            </Button>
            </div>
            
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;