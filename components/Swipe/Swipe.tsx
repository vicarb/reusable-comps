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
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
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
      {[1, 2, 3, 4].map((num) => (
        <SwiperSlide key={num}>
          <div style={{ borderRadius: '5px', overflow: 'hidden' }}>
            {isLoading && <LoadingSpinner />}
            <Image 
              alt={`Image ${num}`} 
              src={`https://picsum.photos/800/600?random=${num}`} 
              width={800} 
              height={600} 
              layout="responsive"
              onLoading={() => setIsLoading(true)}
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swipe;
