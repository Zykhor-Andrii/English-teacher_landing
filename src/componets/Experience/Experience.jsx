import './Experience.scss'
import vpu from '../../foto/vpu34.jpeg'
import universitySumi from '../../foto/universitySumi.png'
import certificate1 from '../../foto/certificate1.png'
import certificate2 from '../../foto/certificate2.png'
import certificate3 from '../../foto/certificate3.png'
import certificate4 from '../../foto/certificate4.png'

export const Experience = () => (
  <section className='page__block experience'>
    <div className="container">
      <h1 className="experience__title">
        Мій досвід
      </h1>
      <div className="experience__education">
        {/* <hr className='experience__vertical-line' /> */}

        <div className="experience__teaching">
          <div className="experience__description">
            <p className="experience__description-item">
              <span className="experience__description-item--bold">
                Місце роботи:
                &nbsp;
              </span>
              Вище професійне училище №34 м. Виноградів
            </p>
            <p className="experience__description-item">
              <span className='experience__description-item--bold'>
                Посада:
                &nbsp;

              </span>
              викладач англійської мови та всесвітньої історії.
            </p>
            <p className="experience__description-item">
              <span className='experience__description-item--bold'>
                Стаж педагогічної роботи:
                &nbsp;
              </span>
              12 років.
              &nbsp;
            </p>
            <p className="experience__description-item">
              <span className='experience__description-item--bold'>
                Дисципліни:
                &nbsp;
              </span>
              англійська мова, всесвітня історія, англійське ділове мовлення.
            </p>
            <p className="experience__description-item">
              <span className='experience__description-item--bold'>
                Категорія:
                &nbsp;
              </span>
              Спеціаліст першої категорії.
            </p>
          </div>
          <img
            className='experience__description-img experience__description-img--top'
            src={vpu}
            alt="vpu"
          />
        </div>
        <div className="experience__study">
          <div className="experience__description experience__description--left">
            <p className="experience__description-item">
              <span className="experience__description-item--bold">
                Освіта: &nbsp;
              </span>
              Вища.
            </p>
            <p className="experience__description-item">
              <span className='experience__description-item--bold'>
                Навчальний заклад:
                &nbsp;

              </span>
              Сумський державний педагогічний університет ім. А.С. Макаренка.
            </p>
            <p className="experience__description-item">
              <span className='experience__description-item--bold'>
                Спеціальність:
                &nbsp;
              </span>
              Педагогіка і методика середньої освіти, викладач історії та правознавства, викладач англійської мови та зарубіжної літератури.
              &nbsp;
            </p>

          </div>
          <img
            className='experience__description-img experience__description-img--bottom'
            src={universitySumi} alt="universitySumi "
          />
        </div>
      </div>
      <div className="certificate">
        <h3 className="certificate__title">
          Результати підвищення кваліфікації
        </h3>

        <div className="certificate__content">
          <div className="certificate__item">
            <img
              className="certificate__image"
              src={certificate1}
              alt="certificate1"
            />
            <p className="certificate__info">
              Kурси підвищення кваліфікації учителів англійської мови при Закарпатському інституті післядипломної педагогічної освіти
            </p>
          </div>
          <div className="certificate__item">
            <img

              src={certificate2}
              alt="certificate2"
              className="certificate__image certificate__image--more-distance"
            />
            <p className="certificate__info"
            >
              Курси підвищення кваліфікації викладачів професійно-технічної підготовки при Білоцерківському інституті неперервної професійної освіти
            </p>
          </div>
          <div className="certificate__item">
            <img
              src={certificate3}
              alt="certificate3"
              className="certificate__image"
            />
            <p className="certificate__info">
              Курси підвищення кваліфікації учителів історії, правознавства,
            </p>
          </div>
          <div className="certificate__item">
            <img
              src={certificate4}
              alt="certificate4"
              className="certificate__image"
            />
            <p className="certificate__info">
              Kурси підвищення кваліфікації учителів англійської мови при Закарпатському інституті післядипломної педагогічної освіти
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
