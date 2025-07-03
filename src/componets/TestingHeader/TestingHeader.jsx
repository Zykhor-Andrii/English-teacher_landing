import classNames from "classnames"
import "../TestEnglish/TestEnglish.scss"

export const TestingHeader = ({toogleTesting, subjectName}) => {

  return (
    <>
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
    </>
  )
}