import classNames from "classnames";
import "../TestEnglish/TestEnglish.scss";

export const TestingHistory = ({
  setOpenHistory,
  openHistory,
  subjectHistory,
  setSubjectHistory,
  testResults,
  getHistorySummaryLine,
  idTestDetails,
}) => {
  return (
    <div className="testing__history">
      <div className="hesting__history-opener">
        <span
          className="testing__history-open-item"
          onClick={() => setOpenHistory(!openHistory)}
        >
          {openHistory ? "🔽 Закрити" : "▶ Відкрити"}
        </span>{" "}
        історію тестів
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
            {!testResults[subjectHistory].length ? (
              <p className="testing__noHistory">Нема історії тестів.</p>
            ) : (
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
                            <p className="testing__showResult-question">
                              {resultTest.question}
                            </p>
                            <p className="testing__showResult-answer">
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
            )}
          </div>
        </>
      )}
    </div>
  );
};
