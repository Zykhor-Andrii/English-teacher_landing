import { useEffect, useState } from "react";
import "./TestEnglish.scss";
import classNames from "classnames";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

const getCorrectAnswersCount = (arrTest) => {
  let correctCount = 0;
  arrTest.forEach((item) => {
    if (item.answer === item.correctAnswer) {
      correctCount++;
    }
  });

  return correctCount;
};

export const TestEnglish = () => {
  const [questions, setQuestions] = useState({});
  const [levelSubject, setLevelSubject] = useState("beginner");
  const [arrTesting, setArrTesting] = useState([]);
  const [chooseOption, setChooseOption] = useState("");
  const [subjectName, setSubjectName] = useState("english");
  const [subjectHistory, setSubjectHistory] = useState("english");
  const [testResults, setTestResults] = useLocalStorage("testResults", {
    english: [],
    history: [],
  });
  const [openHistory, setOpenHistory] = useState(false);
  const [showResultTest, setShowResultTest] = useState(false);

  const [idTestDetails, setIdTestDetails] = useState(null);

  const getIdHistoryDetails = (id) => {
    if (idTestDetails === id) {
      setIdTestDetails(null);
    } else {
      setIdTestDetails(id);
    }
  };

  console.log(testResults[subjectName]);

  const getHistorySummaryLine = (itemArr, index) => {
    const subject = subjectHistory === "history" ? "Історія" : "Англійська";
    const summary = (
      <>
        {`${subject} | Рівень: ${
          itemArr[index].level || "beginner"
        } | Правильні: ${getCorrectAnswersCount(itemArr)}/10 `}
        <span
          className="testing__history-open-item"
          onClick={() => getIdHistoryDetails(index)}
        >
          {idTestDetails === index ? "🔽" : "▶"}
        </span>
      </>
    );

    return summary;
  };

  function getApiUrl(subject, level = "beginner") {
    return `/Api/${subject}_tests_${level}.json`;
  }

  const addResult = (subject, result) => {
    setTestResults((prev) => ({
      ...prev,
      [subject]: [...(prev[subject] || []), result],
    }));
  };

  useEffect(() => {
    if (arrTesting.length === 10) {
      addResult(subjectName, [...arrTesting]);
      setShowResultTest(true);
    }
  }, [arrTesting]);

  const getTestingAgain = () => {
    setArrTesting([]);
    setShowResultTest(false);
  };

  useEffect(() => {
    setArrTesting([]);
  }, [subjectName, levelSubject]);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  async function getQuestions() {
    try {
      const response = await fetch(getApiUrl(subjectName, levelSubject));

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const randomIndex = getRandomInt(data.length);
      setQuestions(data[randomIndex]);
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    }
  }

  const toogleTesting = (name) => {
    setSubjectName(name);
  };

  const sendAnswer = () => {
    if (chooseOption) {
      const newTest = { ...questions };
      newTest.answer = chooseOption;
      newTest.level = levelSubject;

      setArrTesting((prev) => [...prev, newTest]);
      setChooseOption("");
      handleQustion();
    }
  };

  const handleQustion = () => {
    getQuestions();
  };

  useEffect(() => {
    getQuestions();
  }, [subjectName, levelSubject]);

  const handleChangeLevel = (event) => {
    setLevelSubject(event.target.value);
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
                "testing__subject-item--active": subjectName === "english",
              })}
              onClick={() => toogleTesting("english")}
            >
              English testing
            </h4>
            <h4
              className={classNames("testing__subject-item", {
                "testing__subject-item--active": subjectName === "history",
              })}
              onClick={() => toogleTesting("history")}
            >
              History testing
            </h4>
          </div>
          {showResultTest ? (
            <div className="testing__showResult">
              <ul className="testing__showResult-list">
                {arrTesting.map((resultTest, testIndex) => (
                  <li className="testing__showResult-item" key={testIndex}>
                    <p className="testing__showResult-question">{resultTest.question}</p>
                    <p>
                      Твоя відповідь: {resultTest.answer}{" "}
                      {resultTest.answer === resultTest.correctAnswer ? (
                        <>✅{resultTest.correctAnswer}</>
                      ) : (
                        <>❌ (Правильна: {resultTest.correctAnswer})</>
                      )}
                    </p>
                  </li>
                ))}
              </ul>
              <button
                onClick={getTestingAgain}
                className="testing__showResult-button"
              >
                Пройти ще раз
              </button>
            </div>
          ) : (
            <div className="testing__wrapper">
              <div className="testing__chooseLevel-wrapper">
                <p className="testing__chooseLevel-label">Вибери рівень</p>
                <select
                  className="testing__chooseLevel"
                  name="level"
                  id=""
                  value={levelSubject || "beginner"}
                  onChange={handleChangeLevel}
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
                <p className="testing__progress">{arrTesting.length}/10</p>
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
                    onClick={() => sendAnswer(subjectName)}
                    className="testing__choose"
                  >
                    Вибрати відповідь
                  </button>
                </div>
              </div>
              <hr />
            </div>
          )}
          <div className="testing__history">
            <div className="hesting__history-opener">
                  <span
          className="testing__history-open-item"
          onClick={() => setOpenHistory(!openHistory)}
        >
          {openHistory ? "🔽 Закрити" : "▶ Відкрити"}
        </span> історію тестів
            </div>
            {openHistory && (
          <>
            <div className="testing__history-subject">
              <h5
                className={classNames("testing__history-subject-item", {
                  "testing__history-subject-item--active":
                    subjectHistory === "english",
                })}
                onClick={() => setSubjectHistory("english")}
              >
                English testing
              </h5>
              <h5
                className={classNames("testing__history-subject-item", {
                  "testing__history-subject-item--active":
                    subjectHistory === "history",
                })}
                onClick={() => setSubjectHistory("history")}
              >
                History testing
              </h5>
            </div>
            <div className="testing__test-history">
              <ol className="testing__test-list">
                {testResults[subjectHistory].map((item, index) => (
                  <li className="testing__history-item" key={index}>
                    {getHistorySummaryLine(item, index)}
                    {idTestDetails === index && (
                      <ul>
                        {item.map((resultTest, testIndex) => (
                          <li
                            className="testing__showResult-item"
                            key={testIndex}
                          >
                            <p>{resultTest.question}</p>
                            <p>
                              Твоя відповідь: {resultTest.answer}{" "}
                              {resultTest.answer ===
                              resultTest.correctAnswer ? (
                                "✅"
                              ) : (
                                <>❌ (Правильна: {resultTest.correctAnswer})</>
                              )}
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
            </div>
            </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
