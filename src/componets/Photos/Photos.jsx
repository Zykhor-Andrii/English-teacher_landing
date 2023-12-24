import { Swiper, SwiperSlide } from 'swiper/react';
import ImageViewer from 'react-simple-image-viewer';

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
import placeholder from '../../img/photo_video/placeholder.png'
import video from '../../img/photo_video/videoOfLesson.mp4'


import { useCallback, useEffect, useState } from 'react';

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
  photo18,
  photo19,
  photo20,
  photo21,
  photo22,

]

export const Photos = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(windowWidth);
  return (
    <section id="photos" className="page__section photos">
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
          spaceBetween={2}
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
            photos.map((photo, index) => (
              <SwiperSlide>
                <img
                  className='photos__item'
                  id={index}
                  src={photo}
                  alt="teacher"
                  onClick={() => {
                    setIsViewerOpen(true)
                    openImageViewer(index)
                  }}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className="photos__pagination swiper-pagination">
        </div>
      </div>
      </div>
      <div className="photos__video-content">
        <div className="container">
          <h3 className="photos__video-title">
            Відкритий урок
          </h3>

          <video className="photos__video" poster={placeholder} controls>
            <source
              src={video}
              type="video/mp4" />
          </video>


        </div>
      </div>

      {isViewerOpen && (
        <ImageViewer
          src={photos}
          currentIndex={currentImage}
          disableScroll={true}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        // leftArrowComponent={false}
        // rightArrowComponent={false}
        />
      )}
    </section>
  )
}
