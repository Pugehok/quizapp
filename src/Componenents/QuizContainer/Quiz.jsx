import { useDispatch, useSelector } from 'react-redux';
import { closeQuiz } from '../../store/QuizSlice';
import React, { useState } from 'react';
import s from './quizComponent.module.scss';
// add test
export const Quiz = () => {
  let [CurrentQuiz, setCurrentQuiz] = useState(0);
  let [answers, setAnwser] = useState([]);
  let [corretAnswers, setCorrectAnswers] = useState(0);
  const Quizes = useSelector((state) => state.Quiz.CurrentQuiz);
  const dispatch = useDispatch();
  console.log(Quizes);
  const percentage = Math.round((CurrentQuiz / Quizes.length) * 100);

  const HandlerAnswser = (key) => {
    setCurrentQuiz(CurrentQuiz + 1);
    setAnwser([...answers, key]);
  };
  const buttonExit = () => {
    dispatch(closeQuiz());
  };

  const Correct = () => {
    let counter = 0;
    const test = Quizes.map((e) => {
      return e.correct_answer;
    });
    for (let i = 0; i < test.length; i++) {
      if (test[i] == answers[i]) {
        counter++;
      }
    }

    return <h1> {`Правильных ответов: ${counter} / ${Quizes.length}`} </h1>;
  };

  return (
    <div>
      {answers.length == Quizes.length ? (
        <div className={s.Quiz}>
          <div className={s.progress}>
            <div style={{ width: `${percentage}%` }} className={s.progress__inner}></div>
            <div>
              {<Correct />}
              <button onClick={() => buttonExit()}>Выйти</button>
            </div>
          </div>
        </div>
      ) : (
        <div className={s.Quiz}>
          <div className={s.progress}>
            <div style={{ width: `${percentage}%` }} className={s.progress__inner}></div>
          </div>
          <h2>{Quizes[CurrentQuiz].title}</h2>
          <ul>
            {Quizes[CurrentQuiz].questions.map((e, index) => {
              return (
                <li key={index} onClick={() => HandlerAnswser(index)}>
                  {e}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
