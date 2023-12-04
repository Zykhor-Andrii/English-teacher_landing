import './UsefulLinks.scss'

import linkImage1 from '../../img/usefulLinkImage/linkImage1.png'
import linkImage2 from '../../img/usefulLinkImage/linkImage2.png'
import linkImage3 from '../../img/usefulLinkImage/linkImage3.png'
import linkImage4 from '../../img/usefulLinkImage/linkImage4.png'
import linkImage5 from '../../img/usefulLinkImage/linkImage5.png'
import linkImage6 from '../../img/usefulLinkImage/linkImage6.png'
import linkImage7 from '../../img/usefulLinkImage/linkImage7.png'
import linkImage8 from '../../img/usefulLinkImage/linkImage8.png'
import linkImage9 from '../../img/usefulLinkImage/linkImage9.png'
import linkImage10 from '../../img/usefulLinkImage/linkImage10.png'
import linkImage11 from '../../img/usefulLinkImage/linkImage11.png'
import linkImage12 from '../../img/usefulLinkImage/linkImage12.png'
import linkImage13 from '../../img/usefulLinkImage/linkImage13.png'
import linkImage14 from '../../img/usefulLinkImage/linkImage14.png'
import linkImage15 from '../../img/usefulLinkImage/linkImage15.png'

const usefulLinks = [
  {
    id: 1,
    image: linkImage1,
    link: 'https://www.examenglish.com/grammar/a1_grammar.html',
    description: 'Grammar explanations and practice tests at A1 level',
  },
  {
    id: 2,
    image: linkImage2,
    link: 'https://www.englishaula.com/en/english-language-training-and-support/',
    description: 'English grammar, vocabulary, sentence transformation, pronunciation, common confusions, word...',
  },
  {
    id: 3,
    image: linkImage3,
    link: 'https://www.onestopenglish.com/adults/vocabulary/macmillan-dictionary-blog',
    description: 'Macmillan Dictionary Blog | Vocabulary | Adults | Onestopenglish',
  },
  {
    id: 4,
    image: linkImage4,
    link: 'https://www.perfect-english-grammar.com/english-language-pdf.html',
    description: '  English Language PDFs',
  },
  {
    id: 5,
    image: linkImage5,
    link: 'https://www.bbc.co.uk/learningenglish',
    description: 'BBC Learning English',
  },
  {
    id: 6,
    image: linkImage6,
    link: 'https://www.englishpage.com/',
    description: 'Free Advanced English lessons',
  },
  {
    id: 7,
    image: linkImage7,
    link: 'https://share.america.gov/everyday-conversations-home-of-harvard-audio/',
    description: 'Everyday conversations: Home of Harvard University (and a lot more!) [audio]',
  },
  {
    id: 8,
    image: linkImage8,
    link: 'https://dictionary.cambridge.org/dictionary/english/strapped-for',
    description: 'Dictionary.cambridge.org',
  },
  {
    id: 9,
    image: linkImage9,
    link: 'https://soundcloud.com/tags/learn%20english',
    description: 'Music tracks, songs, playlists tagged learn english on SoundCloud',
  },
  {
    id: 10,
    image: linkImage10,
    link: 'https://www.flo-joe.co.uk/fce/students/writing/express/index.htm',
    description: 'Try these quizzes to test your use of linking words for the FCE formal letter question',
  },
  {
    id: 11,
    image: linkImage11,
    link: 'https://learnenglishteens.britishcouncil.org/',
    description: 'British Council LearnEnglish Teens | Free resources for teens to help improve your English',
  },
  {
    id: 12,
    image: linkImage12,
    link: 'https://learnenglish.britishcouncil.org/',
    description: 'Learn English Online | British Council',
  },
  {
    id: 13,
    image: linkImage13,
    link: 'https://learnenglishkids.britishcouncil.org/',
    description: 'Learn English Kids',
  },
  {
    id: 14,
    image: linkImage14,
    link: 'https://wordwall.net/uk/resource/20031876/present-simple-past-simple',
    description: 'Present Simple/ Past Simple',
  },
  {
    id: 15,
    image: linkImage15,
    link: 'https://test-english.com/',
    description: 'Test your English - Every level and every skill',
  },
]

export const UsefulLinks = () => {

  return (
    <section id="usefulLinks" className="page__section links">
      <div className="container">
        <h2 className="page__title links__title">
          Корисні посилання
        </h2>

        <div className="links__content">
          <h3 className="links__content-title">
            Посилання для всіх рівнів мови
          </h3>
          <div className="links__content-wrapper">
            {
              usefulLinks.map(item => (
                <div className="links__item">
                  <a href={item.link}>
                    <img
                      src={item.image}
                      alt={item.description}
                      className="links__item-img"
                    />
                  </a>

                  <a
                    href={item.link}
                    className="links__item-link"
                  >
                    {item.description}
                  </a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}