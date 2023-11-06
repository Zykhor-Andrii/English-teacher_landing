import './Header.scss'
import { useState } from 'react';

import burger from '../../foto/icons/Vector.svg';
import closeMenu from '../../foto/icons/icon_close.svg';
import classNames from 'classnames/bind';
import { SocialMedia } from '../SocialMedia/SocialMedia';
import { Navigation } from '../Navigation/Navigation';
export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <header className="header page__block">
      <div className="container">
        <div className="header__top">
          <div className="header__nav">
            <Navigation />
          </div>

          <img
            onClick={toggleMenu}
            src={burger}
            className="header__burger"
            alt="openMenu"
          />
          <hr className='header__top-underline' />
        </div>

        <div className="header__content">
          <div className="header__ellipse"></div>
          <h3 className='header__title'>
            Викладач англійської мови та всесвітньої історії
          </h3>
          <h1 className="header__name">
            Кикина <br/>
             Марія
          </h1>
          <h4 className="header__info-university">
            Вищого професійного  училища №34 м. Виноградів
          </h4>
          <div className="header__credo">
            <div className="header__credo-content">
              <h4 className="header__credo-title">
                Педагогічне кредо:
              </h4>
              <p className="header__credo-text">
                «Не кажи світові про те, що ти хочеш зробити - покажи, як ти робиш».
              </p>
            </div>

          </div>
          <div
            className="header__social-media">
            <SocialMedia />
          </div>
        </div>
      </div>
      <nav className={classNames("nav nav__burger page__nav", { 'nav__burger-open': openMenu })}>

        <div className="nav__content">
          <div className="container">
            <img
              onClick={toggleMenu}
              src={closeMenu}
              className='nav__close-menu'
              alt="close menu" />
            <Navigation />

          </div>
        </div>
      </nav>
    </header>
  )
}

