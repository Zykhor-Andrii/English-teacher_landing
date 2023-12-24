import React, { useCallback } from 'react';
import './Achievement.scss';
import classNames from 'classnames/bind';
import ImageViewer from 'react-simple-image-viewer';



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
import arrowLeft from '../../img/icons/Arrow-left.svg'
import arrowRigth from '../../img/icons/Arrow-rigth.svg'
import { useState } from 'react';

const images = [
  certificate1,
  certificate2,
  certificate3,
  certificate4,
  certificate5,
  certificate6,
  certificate7,
  certificate8,
  certificate9,
  certificate10,
  certificate11,
  certificate12,
]

export const Slider = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [initialX, setInitialX] = useState(null);

  const startTouch = (e) => {
    setInitialX(e.touches[0].clientX);
  }

  const moveTouch = (e) => {
    if (initialX === null) {
      return;
    }

    let currentX = e.touches[0].clientX;
    let diffX = initialX - currentX;

    if (diffX > 0) {
      if (selectedImage >= images.length - 1) {
        setSelectedImage(0)
      } else {
        setSelectedImage(selectedImage + 1)

      }
    } else {

      if (selectedImage <= 0) {
        setSelectedImage(images.length - 1)
      } else {
        setSelectedImage(selectedImage - 1)

      }
    }

    setInitialX(null);
  }

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  let firstLeft = selectedImage - 1 !== -1 ? selectedImage - 1 : images.length - 1;

  let firstRigth = selectedImage + 1 <= images.length - 1 ? selectedImage + 1 : 0;

  let secondLeft = selectedImage - 2;
  let secondRigth = selectedImage + 2;

  switch (selectedImage - 2) {
    case -1:
      secondLeft = images.length - 1;
      break

    case -2:
      secondLeft = images.length - 2;
      break

    default:
  };

  switch (selectedImage + 2) {
    case images.length:
      secondRigth = 0;
      break

    case images.length + 1:
      secondRigth = 1;
      break

    default:
  };

  const scrollLeft = () => {
    if (selectedImage === 0) {
      setSelectedImage(images.length - 1)

      return
    }
    setSelectedImage(selectedImage - 1)
    console.log(selectedImage)
  }
  const scrollRigth = () => {
    if (selectedImage === images.length - 1) {
      setSelectedImage(0)

      return
    }
    setSelectedImage(selectedImage + 1)
    console.log(selectedImage)
  }


  return (
    <section className="page__section slider">
      <div className="container">
        <h2 className='page__title'>
          Сертифікати та досягнення
        </h2>
        <div className="slider__wrapper"
          onTouchStart={startTouch}
          onTouchMove={moveTouch}
          onTouchEnd={() => setInitialX(null)}
          style={{ overflowX: 'hidden' }}

        >
          <ul
            className="slider__content"

          >
            {images.map((image, index) => (
              <li
                className={classNames('slider__item',
                  { 'slider__selected': index === selectedImage },
                  { 'slider__item--first-left': index === firstLeft },
                  { 'slider__item--first-rigth': index === firstRigth },
                  { 'slider__item--second-left': secondLeft === index },
                  { 'slider__item--second-rigth': secondRigth === index },

                )}
                key={index}
                onClick={() => {
                  if (index === selectedImage) {
                    setIsViewerOpen(true)
                    openImageViewer(index)
                  }
                  setSelectedImage(index)

                }}
              >
                <img
                  className={classNames('slider__image', { 'slider__image-selected': index === selectedImage },)}
                  src={image}
                  alt="certificate" />
              </li>
            ))}

          </ul>
          <img
            className='slider__arrow slider__arrow--left'
            src={arrowLeft}
            alt="arrow left"
            onClick={scrollLeft}
          />

          <img
            className='slider__arrow slider__arrow--rigth'
            src={arrowRigth}
            alt="arrow rigth"
            onClick={scrollRigth}
          />
        </div>

        <ul className="slider__point">
          <li

            onClick={() => setSelectedImage(10)}
            className={classNames("slider__point-item", { 'slider__point-item--selected': selectedImage === 10 })}

          >

          </li>
          <li

            className={classNames("slider__point-item", { 'slider__point-item--selected': selectedImage === 11 })}
            onClick={() => setSelectedImage(11)}

          >

          </li>
          <li

            className={classNames("slider__point-item", { 'slider__point-item--selected': selectedImage === 0 })}
            onClick={() => setSelectedImage(0)}

          >

          </li>
          <li

            className={classNames("slider__point-item", { 'slider__point-item--selected': selectedImage === 1 })}
            onClick={() => setSelectedImage(1)}
          >

          </li>
          <li

            className={classNames("slider__point-item", { 'slider__point-item--selected': selectedImage === 2 })}
            onClick={() => setSelectedImage(2)}

          >

          </li>
          <li

            className={classNames("slider__point-item", { 'slider__point-item--selected': selectedImage === 3 })}
            onClick={() => setSelectedImage(3)}
          >

          </li>
          <li

            className={classNames("slider__point-item", { 'slider__point-item--selected': selectedImage === 4 })}
            onClick={(event) => setSelectedImage(4)}

          >

          </li>
          <li

            className={classNames("slider__point-item", { 'slider__point-item--selected': selectedImage === 5 })}
            onClick={(event) => setSelectedImage(5)}

          >

          </li>
          <li

            className={classNames("slider__point-item", { 'slider__point-item--selected': selectedImage === 6 })}
            onClick={(event) => setSelectedImage(6)}

          >

          </li>
          <li

            className={classNames("slider__point-item", { 'slider__point-item--selected': selectedImage === 7 })}
            onClick={(event) => setSelectedImage(7)}

          >

          </li>
          <li

            className={classNames("slider__point-item", { 'slider__point-item--selected': selectedImage === 8 })}
            onClick={(event) => setSelectedImage(8)}

          >

          </li>
          <li

            className={classNames("slider__point-item", { 'slider__point-item--selected': selectedImage === 9 })}
            onClick={(event) => setSelectedImage(9)}
          >

          </li>
        </ul>
      </div>

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={true}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        // leftArrowComponent={false}
        // rightArrowComponent={false}
        />
      )}
    </section>
  );
};

