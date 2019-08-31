import { Button, Card, Row, Col } from 'antd';
import React from 'react';
import tr from '../assets/flags/tr.png';
import eng from '../assets/flags/eng.png';
import fr from '../assets/flags/fr.png';

class popularCities extends React.Component {
  state = {
    
  };


  getCityButtons = () => {
    return (
      <Row gutter={16}>
        <Col span={4} >
          <div style={{marginTop: '5px'}}>
            <Button type="primary" style={{minWidth: '120px'}}>
              <div>
                <img src={tr} style={{height: "60%"}} alt={'no flag'} />
                {' '}
                {'Istanbul'}
              </div>
            </Button>
            </div>
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
            <Button type="primary" style={{minWidth: '120px', textAlign: 'left'}}>
              <div>
                <img src={fr} style={{height: "60%"}} alt={'no flag'} />
                {' '}
                {'Paris'}
              </div>
            </Button>
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
            <img style={{ width:"100px", margin: "10px" }} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
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


