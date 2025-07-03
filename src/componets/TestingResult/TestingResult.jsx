import "../TestEnglish/TestEnglish.scss";

export const TestingResult = ({
  subjectName,
  getCorrectAnswersCount,
  arrTesting,
  getTestingAgain,
}) => {
  return (
    <div className="testing__showResult">
      <h5 className="testing__showResult-title">
        Твої результати тестування з {subjectName}:<br></br>
        {getCorrectAnswersCount(arrTesting)}/10
      </h5>
      <ul className="testing__showResult-list">
        {arrTesting.map((resultTest, testIndex) => (
          <li className="testing__showResult-item" key={testIndex}>
            <p className="testing__showResult-question">
              {resultTest.question}
            </p>
            <p className="testing__showResult-answer">
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
      <button onClick={getTestingAgain} className="testing__showResult-button">
        Пройти ще раз
      </button>
    </div>
  );
};
