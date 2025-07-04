import classNames from "classnames";
import "../Testing/Testing.scss";

export const TestingQuestion = ({
  levelSubject,
  handleChangeLevel,
  arrTesting,
  questions,
  getChoose,
  chooseOption,
  sendAnswer,
  subjectName,
}) => {
  return (
    <div className="testing__wrapper">
      <div className="testing__chooseLevel-wrapper">
        <p className="testing__chooseLevel-label">Вибери рівень</p>
        <select
          className="testing__chooseLevel"
          name="level"
          id="level-select"
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
  );
};
