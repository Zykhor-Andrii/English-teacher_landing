import { Swiper, SwiperSlide } from 'swiper/react';

import './Photos.scss'
import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/pagination';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';




import photo1 from '../../img/photo_video/photo1.jpeg'
import photo2 from '../../img/photo_video/photo2.jpeg'
import photo3 from '../../img/photo_video/photo3.jpeg'
import photo4 from '../../img/photo_video/photo4.jpeg'
import photo5 from '../../img/photo_video/photo5.jpeg'
import photo6 from '../../img/photo_video/photo6.jpeg'
import photo7 from '../../img/photo_video/photo7.jpeg'
import photo8 from '../../img/photo_video/photo8.jpeg'
import photo9 from '../../img/photo_video/photo9.jpeg'
import photo10 from '../../img/photo_video/photo10.jpeg'
import photo11 from '../../img/photo_video/photo11.jpeg'
import photo12 from '../../img/photo_video/photo12.jpeg'
import photo13 from '../../img/photo_video/photo13.jpeg'
import photo14 from '../../img/photo_video/photo14.jpeg'
import photo15 from '../../img/photo_video/photo15.jpeg'
import photo16 from '../../img/photo_video/photo16.jpeg'
import photo17 from '../../img/photo_video/photo17.jpeg'
import photo18 from '../../img/photo_video/photo18.jpeg'
import photo19 from '../../img/photo_video/photo19.jpeg'
import photo20 from '../../img/photo_video/photo20.jpeg'
import photo21 from '../../img/photo_video/photo21.jpeg'
import photo22 from '../../img/photo_video/photo22.jpeg'
import { useEffect, useState } from 'react';

// console.log(photo)

const photos = [
  {
    id: 1,
    photo: photo1,
  },
  {
    id: 2,
    photo: photo2,
  },
  {
    id: 3,
    photo: photo3,
  },
  {
    id: 4,
    photo: photo4,
  },
  {
    id: 5,
    photo: photo5,
  },
  {
    id: 6,
    photo: photo6,
  },
  {
    id: 7,
    photo: photo7,
  },
  {
    id: 8,
    photo: photo8,
  },
  {
    id: 9,
    photo: photo9,
  },
  {
    id: 10,
    photo: photo10,
  },
  {
    id: 11,
    photo: photo11,
  },
  {
    id: 12,
    photo: photo12,
  },
  {
    id: 13,
    photo: photo13,
  },
  {
    id: 14,
    photo: photo14,
  },
  {
    id: 15,
    photo: photo15,
  },
  {
    id: 16,
    photo: photo16,
  },
  {
    id: 17,
    photo: photo17,
  },
  {
    id: 18,
    photo: photo18,
  },
  {
    id: 19,
    photo: photo19,
  },
  {
    id: 20,
    photo: photo20,
  },
  {
    id: 21,
    photo: photo21,
  },
  {
    id: 22,
    photo: photo22,
  },
]

export const Photos = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Чистка підписки на подію при виході з компоненту
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(windowWidth);
  return (
    <section className="page__section photos">



      <div className="container">
        <h1 className="page__title">
          Фото
        </h1>
        <div className="photos__content">
          <div className="photos__button photos__next  swiper-button-next">
          </div>
          <div className="photos__prev photos__button swiper-button-prev">
          </div>
          <Swiper
            slidesPerView={windowWidth >= 768 ? 3 : 2}
            spaceBetween={24}
            // freeMode={true}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
            }
            pagination={{
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Navigation]}
            className="mySwiper"
          >

            {
              photos.map(photo => (
                <SwiperSlide>
                  <img
                    className='photos__item'
                    id={photo.id}
                    src={photo.photo}
                    alt="teacher"
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>
          <div className="photos__pagination swiper-pagination">
          </div>
        </div>
      </div>
    </section>
  )
}