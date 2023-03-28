// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Swipe = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView="auto"
      loop={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints= {{

          // when window width is <= 499px
          499: {
              slidesPerView: 1,
              spaceBetweenSlides: 50
            },
            // when window width is <= 999px
            699: {
                slidesPerView: 2,
                spaceBetweenSlides: 50
            },
            999: {
                slidesPerView: 3,
                spaceBetweenSlides: 50
            }
        }
    }

    >
      <SwiperSlide>
      <img src='https://picsum.photos/800/600?random=1' className='w-full h-60 rounded-md'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src='https://picsum.photos/800/600?random=2' className='w-full h-60 rounded-md'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src='https://picsum.photos/800/600?random=3' className='w-full h-60 rounded-md'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src='https://picsum.photos/800/600?random=5' className='w-full h-60 rounded-md'/>
      </SwiperSlide>

    </Swiper>
  );
};

export default Swipe