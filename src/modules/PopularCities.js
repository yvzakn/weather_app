import { Card, Row, Col, Menu } from 'antd';
import React from 'react';
import axios from 'axios';

// flags
import tr from '../assets/flags/tr.png';
import eng from '../assets/flags/eng.png';
import fr from '../assets/flags/fr.png';

// weather
import clear from '../assets/weather/clear.png';
import cloudy from '../assets/weather/cloudy.png';
import lightning from '../assets/weather/lightning.png';
import rainy from '../assets/weather/rainy.png';
import snow from '../assets/weather/snow.png';
import suncloud from '../assets/weather/suncloud.png';

class popularCities extends React.Component {
  state = {
    current: null,
    weather: null
  };

  getWeather = async (city) => {
    let response = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
      headers: {
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
        'X-RapidAPI-Key': '2cba0db4fdmsh19108a1ce761078p11aec4jsn340983280af2'
        
      },
      params: {
        'q': city,
        'units': 'imperial'
      }
    });

    return(response.data.list[0]);
  }

  handleMenuClick = async e => {
    let weather = await this.getWeather(e.key);

    this.setState({
      current: e.key,
      weather
    });
  };

  getCityButtons = () => {
    const { SubMenu } = Menu;
    return (
      <Row gutter={16}>
        <Col span={4} >
          <div style={{marginTop: '5px'}}>
            <Menu
              onClick={this.handleMenuClick}
              style={{ width: 256 }}
              selectedKeys={[this.state.current]}
              mode="inline"
            >
              <SubMenu
                key="europe"
                title={
                  <div>
                    <img src={'avrupabayragi'} style={{height: "60%"}} alt={'no flag'} />
                    {' '}
                    {'Europe'}
                  </div>
                }
              >
                <Menu.Item key="istanbul">
                  <div>
                    <img src={tr} style={{height: "60%"}} alt={'no flag'} />
                    {' '}
                    {'Istanbul'}
                  </div>
                </Menu.Item>
                <Menu.Item key="london">
                  <div>
                    <img src={eng} style={{height: "60%"}} alt={'no flag'} />
                    {' '}
                    {'London'}
                  </div>
                </Menu.Item>
                <Menu.Item key="paris">
                  <div>
                    <img src={fr} style={{height: "60%"}} alt={'no flag'} />
                    {' '}
                    {'Paris'}
                  </div>
                </Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </SubMenu>
              <SubMenu
                key="asia"
                title={
                  <div>
                    <img src={'asyabayragi'} style={{height: "60%"}} alt={'no flag'} />
                    {' '}
                    {'Asia'}
                  </div>
                }
              >
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
              </SubMenu>
              <SubMenu
                key="africa"
                title={
                  <div>
                    <img src={'africaflag'} style={{height: "60%"}} alt={'no flag'} />
                    {' '}
                    {'Africa'}
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

  getWeatherPic = (weather) => {
    console.log('weather', weather)
    let weatherObj = {
      Clear: clear,
      Clouds: cloudy,
      Lightning: lightning,
      Rain: rainy,
      Snow: snow,
      Suncloud: suncloud
    }
    return weatherObj[weather]
  }

  getCard = () => {
    const { weather } = this.state
    
    if (weather) {
      const temperature = weather.main.temp;

      return (
        <Card
          hoverable
          cover={
            <div style={{ display: 'flex', justifyContent: 'center' }} >
              <img style={{ width:"100px", margin: "10px" }} alt="no pic" src={this.getWeatherPic(weather.weather[0].main)} />
            </div>
          }
        >
          <div style={{ display: 'flex', justifyContent: 'center' }} >
            <p style={{fontWeight: 'bold'}}>Temperature:</p>&nbsp;<p>{temperature} F&#176;</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }} >
            
          </div>

      </Card>
      );
    }
    return null;
  }


  render() {
    console.log('weather', this.state.weather)
    return (
      <div>
        {this.getCityButtons()}
      </div>
    );
  }
}

export default popularCities;


