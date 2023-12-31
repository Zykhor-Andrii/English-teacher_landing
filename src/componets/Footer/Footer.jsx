import './Footer.scss';

import { SocialMedia } from "../SocialMedia/SocialMedia"

export const Footer = () => {

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__media">
            <h4 className="footer__title">
              Кикина Марія <br />
              Олександрівна
            </h4>
            <div className="footer__social-media">
              <SocialMedia />
            </div>


          </div>


          <nav className="footer__nav">
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <a
                  className="footer__nav-item-link"
                  href="#header"
                >
                  Про себе
                </a>
              </li>
              <li className="footer__nav-item">
                <a
                  className="footer__nav-item-link"
                  href="#sertificate"
                >
                  Сертифікати
                </a>
              </li>
              <li className="footer__nav-item">
                <a class="footer__nav-item-link" href="#materials">
                  Матеріали для вивчення
                </a>
              </li>
              <li className="footer__nav-item">
                <a class="footer__nav-item-link" href="#usefulLinks">
                  Корисні посилання
                </a>
              </li>
              <li className="footer__nav-item">
                <a class="footer__nav-item-link" href="#photos">
                  Фото
                </a>
              </li>
              <li className="footer__nav-item">
                <a class="footer__nav-item-link" href="#reviews">
                  Відгуки
                </a>
              </li>
              <li className="footer__nav-item">
                <a class="footer__nav-item-link" href="#contacts">
                  Контакти
                </a>
              </li>
            </ul>
          </nav>

        </div>
      </div>

      <hr className='footer__line' />

      <div className="container">
        <div className="footer__bottom">
          <p className='footer__author'>
            2023 Relume. All right reserved.
          </p>
          <div className="footer__policy">
            <a href="#" className="footer__policy-item">
              Privacy Policy
            </a>
            <a href="#" className="footer__policy-item">
              Terms of Service
            </a>
            <a href="#" className="footer__policy-item">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
