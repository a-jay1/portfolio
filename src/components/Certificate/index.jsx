import { imgLink } from '@/utilities/link';
import React from 'react';
import Slider from 'react-slick';
import Heading from '../ui/Heading';

const Certificate = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides, center slide highlighted
    slidesToScroll: 1,
    centerMode: true, // Center the active slide
    arrows: false, // Show left/right arrows
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // Adjust for smaller screens
          centerMode: false,
        },
      },
    ],
  };

  const images = [imgLink,imgLink,imgLink,imgLink,imgLink];

  return (
    <div>
        <Heading title={'Certificates'}/>
        <div style={{ padding: '20px' }}>
        <Slider {...settings}>
            {images.map((image, index) => (
            <div key={index}>
                <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ margin: '0 auto', width: '80%', borderRadius: '10px' }}
                />
            </div>
            ))}
        </Slider>
        </div>
    </div>
  );
};

export default Certificate;
