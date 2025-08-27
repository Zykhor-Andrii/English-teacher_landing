import { useEffect, useState } from "react";
import "./Testing.scss";
import { TestingHeader } from "../TestingHeader/TestingHeader";
import { TestingResult } from "../TestingResult/TestingResult";
import { TestingQuestion } from "../TestingQuestion/TestingQuestion";
import { TestingHistory } from "../TestingHistory/TestingHistory";

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

export const Testing = () => {
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

  console.log(arrTesting);

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
      const randomIndex = () => {
        let index = getRandomInt(data.length);

        while (arrTesting.some(item => item.id === index)) {
          index =  getRandomInt(data.length);
        }

       return index;
      } 
      setQuestions(data[randomIndex()]);
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
    setShowResultTest(false);
    getQuestions();
    setChooseOption("");
  }, [subjectName, levelSubject]);

  const handleChangeLevel = (event) => {
    setLevelSubject(event.target.value);
  };

  const getChoose = (option) => {
    setChooseOption(option);
  };


  return (
    <section id="testing" className="page_section testing">
      <div className="container">
        <div className="testing__content">
          <TestingHeader
            toogleTesting={toogleTesting}
            subjectName={subjectName}
          />
          {showResultTest ? (
            <TestingResult
              subjectName={subjectName}
              getCorrectAnswersCount={getCorrectAnswersCount}
              arrTesting={arrTesting}
              getTestingAgain={getTestingAgain}
            />
          ) : (
            <>
            <TestingQuestion
              levelSubject={levelSubject}
              handleChangeLevel={handleChangeLevel}
              arrTesting={arrTesting}
              sendAnswer={sendAnswer}
              questions={questions}
              getChoose={getChoose}
              subjectName={subjectName}
              chooseOption={chooseOption}
            />
            </>
          )}
          <TestingHistory
            subjectHistory={subjectHistory}
            setSubjectHistory={setSubjectHistory}
            testResults={testResults}
            openHistory={openHistory}
            setOpenHistory={setOpenHistory}
            getIdHistoryDetails={getIdHistoryDetails}
            idTestDetails={idTestDetails}
            getHistorySummaryLine={getHistorySummaryLine}
            />
        </div>
      </div>
    </section>
  );
};
