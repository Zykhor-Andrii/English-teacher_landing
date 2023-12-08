import React from 'react';
import './Achievement.scss';
import classNames from 'classnames/bind';


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


export const Slider = () => {
  const [selectedImage, setSelectedImage] = useState(1);
  let firstLeft = selectedImage - 1 !== 0 ? selectedImage - 1 : images.length;

  let firstRigth = selectedImage + 1 <= images.length ? selectedImage + 1 : 1;

  let secondLeft = selectedImage - 2;
  let secondRigth = selectedImage + 2;

  switch (selectedImage - 2) {
    case 0:
      secondLeft = images.length;
      break

    case -1:
      secondLeft = images.length - 1;
      break

    default:
  };

  switch (selectedImage + 2) {
    case images.length + 1:
      secondRigth = 1;
      break

    case images.length + 2:
      secondRigth = 2;
      break

    default:
  };

  const scrollLeft = () => {
    if (selectedImage === 1) {
      setSelectedImage(images.length)

      return
    }
    setSelectedImage(selectedImage - 1)
    console.log(selectedImage)
  }
  const scrollRigth = () => {
    if (selectedImage === images.length) {
      setSelectedImage(1)

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
        <div className="slider__wrapper">
        <ul className="slider__content">
          {images.map(image => (
            <li
              className={classNames('slider__item',
                { 'slider__selected': image.id === selectedImage },
                { 'slider__item--first-left': image.id === firstLeft },
                { 'slider__item--first-rigth': image.id === firstRigth },
                { 'slider__item--second-left': secondLeft === image.id },
                { 'slider__item--second-rigth': secondRigth === image.id },
              )}
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
            >
              <img

                className='slider__image'
                src={image.url}
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
            id='6'
            onClick={() => setSelectedImage(11)}
            className={classNames("slider__point-item", { 'slider__point-item--selected': selectedImage === 11 })}

          >

          </li>
          <li
            id='7'
            className={classNames("slider__point-item", { 'slider__point-item--selected': selectedImage === 12 })}
            onClick={() => setSelectedImage(12)}

          >

          </li>
          <li
            id='1'
            className={classNames("slider__point-item", { 'slider__point-item--selected': selectedImage === 1 })}
            onClick={() => setSelectedImage(1)}

          >

          </li>
          <li
            id='2'
            className={classNames("slider__point-item", { 'slider__point-item--selected': selectedImage === 2 })}
            onClick={() => setSelectedImage(2)}
          >

          </li>
          <li
            id='3'
            className={classNames("slider__point-item", { 'slider__point-item--selected': selectedImage === 3 })}
            onClick={() => setSelectedImage(3)}

          >

          </li>
          <li
            id='4'
            className={classNames("slider__point-item", { 'slider__point-item--selected': selectedImage === 4 })}
            onClick={() => setSelectedImage(4)}
          >

          </li>
          <li
            id='5'
            className={classNames("slider__point-item", { 'slider__point-item--selected': selectedImage === 5 })}
            onClick={(event) => setSelectedImage(5)}

          >

          </li>
          <li
            id='6'
            className={classNames("slider__point-item", { 'slider__point-item--selected': selectedImage === 6 })}
            onClick={(event) => setSelectedImage(6)}

          >

          </li>
          <li
            id='7'
            className={classNames("slider__point-item", { 'slider__point-item--selected': selectedImage === 7 })}
            onClick={(event) => setSelectedImage(7)}

          >

          </li>
          <li
            id='8'
            className={classNames("slider__point-item", { 'slider__point-item--selected': selectedImage === 8 })}
            onClick={(event) => setSelectedImage(8)}

          >

          </li>
          <li
            id='9'
            className={classNames("slider__point-item", { 'slider__point-item--selected': selectedImage === 9 })}
            onClick={(event) => setSelectedImage(9)}

          >

          </li>
          <li
            id='10'
            className={classNames("slider__point-item", { 'slider__point-item--selected': selectedImage === 10 })}
            onClick={(event) => setSelectedImage(10)}

          >

          </li>
        </ul>
      </div>
    </section>
  );
};

