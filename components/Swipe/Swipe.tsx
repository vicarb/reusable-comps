// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

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
          spaceBetween: 50 // <--- here's the change
      },
      // when window width is <= 699px
      699: {
          slidesPerView: 2,
          spaceBetween: 50 // <--- here's the change
      },
      // when window width is <= 999px
      999: {
          slidesPerView: 3,
          spaceBetween: 50 // <--- here's the change
      }
  }}
>
  <SwiperSlide>
  <div style={{borderRadius: '5px', overflow: 'hidden'}}>
    <Image alt="12312312" src="https://picsum.photos/800/600?random=1" width={800} height={600} />
    </div>
  </SwiperSlide>
  <SwiperSlide>
  <div style={{borderRadius: '5px', overflow: 'hidden'}}>
    <Image alt="123312312" src="https://picsum.photos/800/600?random=2" width={800} height={600} />
    </div>
  </SwiperSlide>
  <SwiperSlide>
  <div style={{borderRadius: '5px', overflow: 'hidden'}}>
    <Image alt="123123122" src="https://picsum.photos/800/600?random=3" width={800} height={600} />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div style={{borderRadius: '5px', overflow: 'hidden'}}>
    <Image alt="1231231212" src="https://picsum.photos/800/600?random=5" width={800} height={600} />
    </div>
  </SwiperSlide>
</Swiper>

  );
};

export default Swipe