import './Navigation.scss'

export const Navigation = ({ closeMenu }) => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item">
        <a
          className="nav__item-link"
          href="#header"
          onClick={closeMenu}
        >
          Про себе
        </a>
      </li>
      <li className="nav__item">
        <a
          className="nav__item-link"
          href="#sertificate"
          onClick={closeMenu}

        >
          Сертифікати
        </a>
      </li>
      <li className="nav__item">
        <a
         class="nav__item-link"
          href="#materials"
          onClick={closeMenu}
          >
          Матеріали для вивчення
        </a>
      </li>
      <li className="nav__item">
        <a 
        class="nav__item-link"
         href="#usefulLinks"
         onClick={closeMenu}
         >
          Корисні посилання
        </a>
      </li>
      <li className="nav__item">
        <a 
        class="nav__item-link"
         href="#photos"
         onClick={closeMenu}
         >
          Фото
        </a>
      </li>
      <li className="nav__item">
        <a 
        class="nav__item-link"
         href="#reviews"
         onClick={closeMenu}
         >
          Відгуки
        </a>
      </li>
      <li className="nav__item">
        <a
         class="nav__item-link"
          href="#contacts"
          onClick={closeMenu}
          >
          Контакти
        </a>
      </li>
    </ul>
  </nav>

)