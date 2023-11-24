import { useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const LoadingSpinner = () => (
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

const Swipe = () => {
  // Array of objects for each slide
  const slides = [
    {
      id: 1,
      title: "Title 1",
      imageUrl: "https://picsum.photos/800/600?random=1",
      description: "Description for Image 1"
    },
    {
      id: 4,
      title: "Title 3",
      imageUrl: "https://picsum.photos/800/600?random=1",
      description: "Description for Image 1"
    },
    {
      id: 4,
      title: "Title 4",
      imageUrl: "https://picsum.photos/800/600?random=1",
      description: "Description for Image 1"
    },
    {
      id: 2,
      title: "Title 2",
      imageUrl: "https://picsum.photos/800/600?random=2",
      description: "Description for Image 2"
    },
    // Add more slides as needed
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}

      breakpoints={{
        499: {
          slidesPerView: 1,
          spaceBetween: 50
        },
        699: {
          slidesPerView: 2,
          spaceBetween: 50
        },
        999: {
          slidesPerView: 3,
          spaceBetween: 50
        }
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="slide-content">
            <Image 
              alt={slide.title} 
              src={slide.imageUrl} 
              width={800} 
              height={600} 
              layout="responsive"
            />
            <div className="text-center mt-4">
              <h3 className="text-2xl font-bold">{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swipe;