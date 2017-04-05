import React, {Component} from 'react';
import 'react-materialize';
import Carousel from './Carousel';
import { Row, Col, Grid, Thumbnail, Button } from 'react-bootstrap';
import ThumbNailSquare from './ThumbNailSquare';


class Main extends Component {
    constructor (props) {
        super(props);
       
      }

    render () {
        return (
        	 <div> 
           <Carousel />
           <ThumbNailSquare sanjoseDescription="10% Disctount for SJSU students"/>
           </div>
        );
    }
};

export default Main;