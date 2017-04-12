import React, {Component} from 'react';
import { Row, Col, Grid, Thumbnail, Button } from 'react-bootstrap';


export default (props) => {
	return (     
<Grid>
    <Row>
    <Col xs={6} md={4}>
      <Thumbnail src="https://s3-us-west-1.amazonaws.com/cmpe281starbuckscarouselimages/image3.JPG" alt="242x200">
        <h3>Order At San jose</h3>
        <p>{props.sanjoseDescription}</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="https://s3-us-west-1.amazonaws.com/cmpe281starbuckscarouselimages/image1.jpg" alt="242x200">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        <h3>Order At San Francisco</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src="https://s3-us-west-1.amazonaws.com/cmpe281starbuckscarouselimages/image2.JPG" alt="242x200">                                                                                                                                                                                                                                                                                                                                                
        <h3>Order At Palo Alto</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    </Col>
    </Row>
  </Grid>
  
  );
};



