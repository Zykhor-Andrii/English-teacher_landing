import { useEffect, useState } from "react";
import "./TestEnglish.scss";
import classNames from "classnames";

export const TestEnglish = () => {
  const [questions, setQuestions] = useState({});
  const [levelEnglish, setLevelEnglish] = useState("beginner");
  const [arrTesting, setArrTesting] = useState([]);
  const [chooseOption, setChooseOption] = useState("");
  const [testingEnglish, setTestingEnglish] = useState(true);


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function getQuestions() {
    fetch("/Api/english_tests_beginner.json")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data[getRandomInt(data.length)]);
      });
  }

  const toogleTesting = (bool) => {
    setTestingEnglish(bool);
  };

  const sendAnswer = () => {
    if (chooseOption) {
      const newTest = { ...questions };
      newTest.answer = chooseOption;

      setArrTesting((prev) => [...prev, newTest]);
      setChooseOption("");
      handleQustion()
    }
  };

  const handleQustion = () => {
    getQuestions();
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const handleChangeLevel = (event) => {
    setLevelEnglish(event.target.value);
  };

  const getChoose = (option) => {
    setChooseOption(option);
  };

  console.log(arrTesting);

  return (
    <section className="page_section testing">
      <div className="container">
        <div className="testing__content">
          <h2 className="page__title">Тестування</h2>
          <div className="testing__subject">
            <h4
              className={classNames("testing__subject-item", {
                "testing__subject-item--active": testingEnglish,
              })}
              onClick={() => toogleTesting(true)}
            >
              English testing
            </h4>
            <h4
              className={classNames("testing__subject-item", {
                "testing__subject-item--active": !testingEnglish,
              })}
              onClick={() => toogleTesting(false)}
            >
              History testing
            </h4>
          </div>
          <div className="testing__wrapper">
            <div className="testing__chooseLevel-wrapper">
              <p className="testing__chooseLevel-label">Вибери рівень</p>
              <select
                className="testing__chooseLevel"
                name="level"
                id=""
                onChange={handleChangeLevel}
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div className="testing__container">
              <div className="testing__question">{questions.question}</div>
              <div className="testing__option">
                <ul className="testing__list">
                  {questions.options &&
                    questions.options.map((item, index) => (
                      <li
                        onClick={() => getChoose(item)}
                        className={classNames("testing__list-item", {
                          "testing__list-item--active": chooseOption === item,
                        })}
                        key={index}
                      >
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="testing__button">
                <button
                  disabled={!chooseOption}
                  onClick={sendAnswer}
                  className="testing__choose"
                >
                  Вибрати відповідь
                </button>
              </div>
            </div>
            <hr />
          </div>
          <div className="testing__history">
            <div className="hesting__history-opener">
              ▼ Close історію тестування
              <div className="testing__history-subject">
                <h5 className="testing__history-subject-item testing__history-subject-item--active">
                  English testing
                </h5>
                <h5 className="testing__history-subject-item">
                  History testing
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
