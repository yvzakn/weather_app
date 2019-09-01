import { Button, Card, Row, Col, Menu, Icon } from 'antd';
import React from 'react';
import tr from '../assets/flags/tr.png';
import eng from '../assets/flags/eng.png';
import fr from '../assets/flags/fr.png';
import snow from '../assets/weather/snow.png'

class popularCities extends React.Component {
  state = {
    
  };

  getCityButtons = () => {
    const { SubMenu } = Menu;
    return (
      <Row gutter={16}>
        <Col span={4} >
          <div style={{marginTop: '5px'}}>
            <Menu
              style={{ width: 256 }}
              defaultOpenKeys={['sub1']}
              selectedKeys={[this.state.current]}
              mode="inline"
            >
              <SubMenu
                key="sub1"
                title={
                  <div>
                    <img src={tr} style={{height: "60%"}} alt={'no flag'} />
                    {' '}
                    {'Istanbul'}
                  </div>
                }
              >
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <div>
                    <img src={eng} style={{height: "60%"}} alt={'no flag'} />
                    {' '}
                    {'London'}
                  </div>
                }
              >
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <div>
                    <img src={fr} style={{height: "60%"}} alt={'no flag'} />
                    {' '}
                    {'Paris'}
                  </div>
                }
              >
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        </Col>
        <Col span={20}>
          {this.getCard()}
        </Col>        
      </Row>
    );
  }

  getCard = () => {

    return (
      <Card
        hoverable
        cover={
          <div style={{ display: 'flex', justifyContent: 'center' }} >
            <img style={{ width:"100px", margin: "10px" }} alt="example" src={snow} />
          </div>
        }
      >
        <div style={{ display: 'flex', justifyContent: 'center' }} >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </div>
    </Card>
    );
  }


  render() {
    return (
      <div>
        {this.getCityButtons()}
      </div>
    );
  }
}

export default popularCities;


