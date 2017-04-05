import React from 'react';

import Slider from 'react-slick';


var SimpleSlider = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className='container-Slider'>
        <Slider {...settings}>
          <div><img src='https://s3-us-west-1.amazonaws.com/cmpe281starbuckscarouselimages/starbucks-wallpaper.jpg' alt="starbucks-wallpaper"/></div>
          <div><img src='https://s3-us-west-1.amazonaws.com/cmpe281starbuckscarouselimages/starbucks-sanfran.jpg' alt="sanfrancisco-starbucks"/></div>                                                            
          <div><img src='https://s3-us-west-1.amazonaws.com/cmpe281starbuckscarouselimages/starbucks-san+jose.jpg' alt="sanjose-starbucks"/></div>
          <div><img src='https://s3-us-west-1.amazonaws.com/cmpe281starbuckscarouselimages/starbucks-palo-alto.jpg' alt="paloalto-starbucks" /></div>                                                           
        </Slider>
      </div>
    );
  }
});

export default SimpleSlider;