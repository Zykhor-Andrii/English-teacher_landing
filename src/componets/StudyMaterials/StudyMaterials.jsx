import classNames from 'classnames';
import { useState } from 'react';
import './StudyMaterials.scss';
import download from '../../img/icons/download.svg';
import emails from '../../materials/materials-en/emails.docx';
import professional__direction from '../../materials/materials-en/foreign-by-professional-direction.doc';
import distance_lesson__direction from '../../materials/materials-en/distance_lesson__professional-direction.pptx';
import business__English from '../../materials/materials-en/business-English.docx'
import offices_devices from '../../materials/materials-en/offices_devices.docx'
import system_government from '../../materials/materials-en/British and American system of government.pptx'
import london_place from '../../materials/materials-en/London places.ppt'
import travel from '../../materials/materials-en/virtual travel.docx'
import upMind from '../../materials/materials-en/Make up your mind.docx'

import history_jurisprudence_start from '../../materials/materials-history/history and jurisprudence start.doc'
import history_jurisprudence from '../../materials/materials-history/history and jurisprudence.docx'
import brain_ring from '../../materials/materials-history/Legal brain-ring.pptx'
import es20_30 from '../../materials/materials-history/es20-30.docx'
import USA from '../../materials/materials-history/USA1945.docx'

import ua__bussines from '../../materials/business language en and ua/open lesson bussnes language.docx';

import work_email from '../../materials/inform and En/work with email.pptx';
import binary from '../../materials/inform and En/binary lesson.doc';
import email_web from '../../materials/inform and En/work with email through the web.doc';






export const StudyMaterials = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <section className="page__section materials">
      <div className="container">
        <h2 className="page__title materials__title">
          Матеріали для вивчення
        </h2>
        <div className="materials__content">
          <div className="materials__subjects">
            <div
              className={
                classNames(
                  "materials__subjects-item",
                  { 'materials__subjects-item--active': !isEnglish })
              }
              onClick={() => setIsEnglish(false)}
            >
              <h4 className="materials__subjects-title">
                Всесвітня історія
              </h4>
            </div>
            <div
              className={
                classNames(
                  "materials__subjects-item",
                  { 'materials__subjects-item--active': isEnglish })
              }
              onClick={() => setIsEnglish(true)}

            >
              <h4 className="materials__subjects-title">
                Англійська мова
              </h4>
            </div>
          </div>

          <div className="materials__wrraper">
            {
              isEnglish ? (
                <>
                  <div className="materials__item">
                    <p className="materials__item-text">
                      Електронні листи
                    </p>
                    <a href={emails} download>
                      <img src={download} alt="Скачати" />
                    </a>
                  </div>
                  <div className="materials__item">
                    <p className="materials__item-text">
                      Навчальний посібник “Іноземна мова за професійним спрямуванням
                    </p>
                    <a href={professional__direction} download>
                      <img src={download} alt="Скачати" />
                    </a>
                  </div>
                  <div className="materials__item">
                    <p className="materials__item-text">
                      План-конспект уроку спец предмету ділова англійська мова
                    </p>
                    <a href={business__English} download>
                      <img src={download} alt="Скачати" />
                    </a>
                  </div>
                  <div className="materials__item">
                    <p className="materials__item-text">
                      Дистанційний урок з предмета англійська мова за професійним спрямуванням
                    </p>
                    <a href={distance_lesson__direction} download>
                      <img src={download} alt="Скачати" />
                    </a>
                  </div>
                  <div className="materials__item">
                    <p className="materials__item-text">
                      Відкритий урок з спец предмету англійська мова <br/>
                      Тема уроку: Ввідні та вивідні пристрої, офісна техніка.
                    </p>
                    <a href={offices_devices} download>
                      <img src={download} alt="Скачати" />
                    </a>
                  </div>
                  <div className="materials__item">
                    <p className="materials__item-text">
                      British and American System of government
                    </p>
                    <a href={system_government} download>
                      <img src={download} alt="Скачати" />
                    </a>
                  </div>
                  <div className="materials__item">
                    <p className="materials__item-text">
                      London’s places of interest
                    </p>
                    <a href={london_place} download>
                      <img src={download} alt="Скачати" />
                    </a>
                  </div>
                  <div className="materials__item">
                    <p className="materials__item-text">
                      Віртуальна подорож до англомовних країн
                    </p>
                    <a href={travel} download>
                      <img src={download} alt="Скачати" />
                    </a>
                  </div>
                  <div className="materials__item materials__item--last">
                    <p className="materials__item-text">
                      Make up your mind
                    </p>
                    <a href={upMind} download>
                      <img src={download} alt="Скачати" />
                    </a>
                  </div>
                </>

              ) : (
                <>
                  <div className="materials__item">
                    <p className="materials__item-text">
                      Планування і проведення у ПТНЗ тижня історії та правознавства: структура, зміст, форми і методи роботи
                    </p>
                    <a href={history_jurisprudence_start} download>
                      <img src={download} alt="Скачати" />
                    </a>
                  </div>
                  <div className="materials__item">
                    <p className="materials__item-text">
                      Презентація на тему: Планування і проведення у ПТНЗ тижня історії та правознавства
                    </p>
                    <a href={history_jurisprudence} download>
                      <img src={download} alt="Скачати" />
                    </a>
                  </div>
                  <div className="materials__item">
                    <p className="materials__item-text">
                      Правовий брейн-ринг
                    </p>
                    <a href={brain_ring} download>
                      <img src={download} alt="Скачати" />
                    </a>
                  </div>
                  <div className="materials__item">
                    <p className="materials__item-text">
                      Велика Британія, Іспанія та Франція у 20-30 рр. ХХ ст..
                    </p>
                    <a href={es20_30} download>
                      <img src={download} alt="Скачати" />
                    </a>
                  </div>
                  <div className="materials__item materials__item--last">
                    <p className="materials__item-text">
                      США у 1945-1960 рр.
                    </p>
                    <a href={USA} download>
                      <img src={download} alt="Скачати" />
                    </a>
                  </div>
                </>
              )
            }

          </div>
        </div>
        <div className="materials__lesson">
          <h3 className="materials__lesson-title">
            Інтегровані уроки
          </h3>
          <div className="materials__lesson-content">
            <div className="materials__lesson-section">
              <h4 className="materials__section-title">
                Ділова українська та ділова англійська мова
              </h4>

              <div className="materials__item">
                <p className="materials__item-text">
                  Культура ділового мовлення
                </p>
                <a href={ua__bussines} download>
                  <img src={download} alt="Скачати" />
                </a>
              </div>


            </div>
            <div className="materials__lesson-section">
              <h4 className="materials__section-title">
                Фізкультура та англійська мова
              </h4>
              <div className="materials__item">
                <p className="materials__item-text">
                  Розробка бінарного уроку з англійської мови та фізичної культури
                </p>
                <a href={binary} download>
                  <img src={download} alt="Скачати" />
                </a>
              </div>
            </div>
            <div className="materials__lesson-section">
              <h4 className="materials__section-title">
                Інформатика та англійська мова
              </h4>

              <div className="materials__item">
                <p className="materials__item-text">
                  Робота з електронною поштою через веб-інтерфейс
                </p>
                <a href={work_email} download>
                  <img src={download} alt="Скачати" />
                </a>
              </div>
              <div className="materials__item">
                <p className="materials__item-text">
                  Бінарний урок інформатики з англійською мовою
                </p>
                <a href='binary' download>
                  <img src={download} alt="Скачати" />
                </a>
              </div>
              <div className="materials__item materials__item--last">
                <p className="materials__item-text">
                  Практична робота № 8. Електронне листування через веб-інтерфейс».
                </p>
                <a href={email_web} download>
                  <img src={download} alt="Скачати" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
