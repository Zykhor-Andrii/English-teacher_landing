import './Navigation.scss'

export const Navigation = () => (
  <nav className="nav">
  <ul className="nav__list">
  <li className="nav__item">
    <a
      className="nav__item-link"
      href="#relevant"
    >
      Про себе
    </a>
  </li>
  <li className="nav__item">
    <a
      className="nav__item-link"
      href="#event"
    >
      Сертифікати
    </a>
  </li>
  <li className="nav__item">
    <a class="nav__item-link" href="#news">
      Матеріали для вивчення
    </a>
  </li>
  <li className="nav__item">
    <a class="nav__item-link" href="#news">
      Корисні посилання
    </a>
  </li>
  <li className="nav__item">
    <a class="nav__item-link" href="#news">
      Фото
    </a>
  </li>
  <li className="nav__item">
    <a class="nav__item-link" href="#news">
      Відгуки
    </a>
  </li>
  <li className="nav__item">
    <a class="nav__item-link" href="#news">
      Контакти
    </a>
  </li>
</ul>
  </nav>

)