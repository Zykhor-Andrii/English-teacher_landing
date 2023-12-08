import certificate1 from '../../img/certificate/certificate1.png';
import certificate2 from '../../img/certificate/certificate2.png';
import certificate3 from '../../img/certificate/certificate3.png';
import certificate4 from '../../img/certificate/certificate4.png';
import certificate5 from '../../img/certificate/certificate5.png';
import certificate6 from '../../img/certificate/certificate6.png';
import certificate7 from '../../img/certificate/certificate7.png';
import certificate8 from '../../img/certificate/certificate8.png';
import certificate9 from '../../img/certificate/certificate9.png';
import certificate10 from '../../img/certificate/certificate10.png';
import certificate11 from '../../img/certificate/certificate11.png';
import certificate12 from '../../img/certificate/certificate12.png';

import { Swiper, SwiperSlide } from 'swiper/react';

import './Test.scss'
import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/pagination';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

const images = [
  { url: certificate1, id: 1 },
  { url: certificate2, id: 2 },
  { url: certificate3, id: 3 },
  { url: certificate4, id: 4 },
  { url: certificate5, id: 5 },
  { url: certificate6, id: 6 },
  { url: certificate7, id: 7 },
  { url: certificate8, id: 8 },
  { url: certificate9, id: 9 },
  { url: certificate10, id: 10 },
  { url: certificate11, id: 11 },
  { url: certificate12, id: 12 },
]

export const Test = () => {

  return (
    <section className="page__section test">
      <div className="container">
        <Swiper
          slidesPerView={5}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
          }
          // pagination={{
          //   el: '.swiper-pagination',
          //   type: 'bullets',
          //   clickable: true,
          // }}

        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
        >

        {
          images.map(photo => (
            <SwiperSlide>
              <img
                className='test__item'
                id={photo.id}
                src={photo.url}
                alt="teacher"
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
    </section >
  )
}