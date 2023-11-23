import telegram from '../../img/icons/telegram.svg'
import instagram from '../../img/icons/instagram.svg'
import facebook from '../../img/icons/facebook.svg'
import './SocialMedia.scss'

export const SocialMedia = () => (
  <div
    className="socialMedia">
    <a href="tg://resolve?domain=Mary Kikina" className="socialMedia__link">
      <img className='socialMedia__icon' src={telegram} alt="telegtam" />
    </a>
    <a href="https://www.instagram.com/mariiakikina/
" className="socialMedia__link">
      <img className='socialMedia__icon' src={instagram} alt="telegtam" />
    </a>
    <a href="https://www.facebook.com/Mary Kykyna (Sapegina)
" className="socialMedia__link">
      <img className='socialMedia__icon' src={facebook} alt="telegtam" />
    </a>
  </div>
)
