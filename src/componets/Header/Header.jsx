import './Header.scss'
import { useState } from 'react';
import foto from '../../img/photo.png'

import burger from '../../img/icons/Vector.svg';
import closeMenuIcon from '../../img/icons/icon_close.svg';
import { SocialMedia } from '../SocialMedia/SocialMedia';
import { Navigation } from '../Navigation/Navigation';
import classNames from 'classnames';
export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  const closeMenu = () => {
    setOpenMenu(false)
  }

  return (
    <header className="header page__section">
      <div className="header__circle header__circle--top"></div>
      <div className="header__circle header__circle--bottom"></div>
      <div className="header__ellipse"></div>

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

        </div>
        <hr className='header__top-underline' />
        <img src={foto} alt="" className="header__foto" />
        <div className="header__content">
          <h3 id="header" className='header__title'>
            Викладач англійської мови та всесвітньої історії
          </h3>
          <h1 className="header__name">
            Кикина Марія <br />
            <span className="header__name--right">
              Олександрівна
            </span>

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
          <img
            onClick={toggleMenu}
            src={closeMenuIcon}
            className='nav__close-menu'
            alt="close menu" />
          <Navigation closeMenu={closeMenu} />

        </div>
      </nav>
    </header>
  )
}

