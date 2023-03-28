import React from 'react';
import Slider from 'react-slick';


const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <>
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    <div className="mx-auto max-w-screen-xl">
      <Slider {...settings}>
        <div>
          <img src="https://picsum.photos/800/600?random=1" alt="slide1" />
        </div>
        <div>
          <img src="https://picsum.photos/800/600?random=2" alt="slide2" />
        </div>
        <div>
          <img src="https://picsum.photos/800/600?random=3" alt="slide3" />
        </div>
        <div>
          <img src="https://picsum.photos/800/600?random=4" alt="slide4" />
        </div>
      </Slider>
    </div>
    
    </>
  );
};

export default SliderComponent;
