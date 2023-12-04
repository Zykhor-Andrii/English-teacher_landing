import './Contacts.scss'

import Email from '../../img/icons/Email.svg'
import Phone from '../../img/icons/Phone.svg'
import Pin from '../../img/icons/Pin.svg'
import Map from '../../img/Map.png'

export const Contacts = () => (
  <section id="contacts" className="page__section contact">
    <div className="container">
      <h2 className="page__title">
        Контакти
      </h2>
      <div className="contact__content">
        <div className="contact__info">
          <div className="contact__item">
            <img
              src={Email}
              alt="Email"
              className="contact__icon"
            />
            <div className="contact__item-info">
              <h4 className="contact__name">
                Email
              </h4>
              <a

                href="mailto:kikina.maria1987@gmail.com"
                className="contact__link">
                kikina.maria1987@gmail.com
              </a>
            </div>
          </div>
          <div className="contact__item">
            <img
              src={Phone}
              alt="Phone"
              className="contact__icon"
            />
            <div className="contact__item-info">
              <h4 className="contact__name">
                Phone
              </h4>
              <a

                href="tel:+380999275708"
                className="contact__link">
                +380999275708
              </a>
            </div>
          </div>
          <div className="contact__item">
            <img
              src={Pin}
              alt="Pin"
              className="contact__icon"
            />
            <div className="contact__item-info">
              <h4 className="contact__name">
                Office
              </h4>
              <a

                href="https://www.google.com/maps/place/%D0%92%D0%B8%D1%89%D0%B5+%D0%BF%D1%80%D0%BE%D1%84%D0%B5%D1%81%D1%96%D0%B9%D0%BD%D0%B5+%D1%83%D1%87%D0%B8%D0%BB%D0%B8%D1%89%D0%B5+%E2%84%9634/@48.1610508,23.0242379,15.83z/data=!4m15!1m8!3m7!1s0x47383a0be162da4b:0xe9701797c6f429a5!2z0LLRg9C70LjRhtGPINCG0LLQsNC90LAg0KTRgNCw0L3QutCwLCAxMTYsINCS0LjQvdC-0LPRgNCw0LTRltCyLCDQl9Cw0LrQsNGA0L_QsNGC0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDkwMzAw!3b1!8m2!3d48.1589101!4d23.0251001!16s%2Fg%2F11f76w9mjg!3m5!1s0x47383a6cd354a867:0xe98e0895dbf72e5a!8m2!3d48.162686!4d23.0236887!16s%2Fg%2F113gbfgnj?entry=ttu"
                className="contact__link">
                90300, Закарпатська область, м. Виноградів, вулиця Івана Франка, 116
              </a>
            </div>
          </div>
        </div>
        <a
          href="https://www.google.com/maps/place/%D0%92%D0%B8%D1%89%D0%B5+%D0%BF%D1%80%D0%BE%D1%84%D0%B5%D1%81%D1%96%D0%B9%D0%BD%D0%B5+%D1%83%D1%87%D0%B8%D0%BB%D0%B8%D1%89%D0%B5+%E2%84%9634/@48.1610508,23.0242379,15.83z/data=!4m15!1m8!3m7!1s0x47383a0be162da4b:0xe9701797c6f429a5!2z0LLRg9C70LjRhtGPINCG0LLQsNC90LAg0KTRgNCw0L3QutCwLCAxMTYsINCS0LjQvdC-0LPRgNCw0LTRltCyLCDQl9Cw0LrQsNGA0L_QsNGC0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDkwMzAw!3b1!8m2!3d48.1589101!4d23.0251001!16s%2Fg%2F11f76w9mjg!3m5!1s0x47383a6cd354a867:0xe98e0895dbf72e5a!8m2!3d48.162686!4d23.0236887!16s%2Fg%2F113gbfgnj?entry=ttu"
          className="contact__map-link"
        >
          <img
            src={Map}
            alt="Mapa"
            className="contact__map"
          />
        </a>
      </div>
    </div>
  </section>
)
