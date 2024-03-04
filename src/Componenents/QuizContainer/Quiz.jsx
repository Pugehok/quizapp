import { useDispatch, useSelector } from 'react-redux';
import { closeQuiz, getKeys } from '../../store/QuizSlice';
import React, { useState } from 'react';
import { ResultComponent } from './ResultComponent';
import s from './quizComponent.module.scss';

export const Quiz = () => {
  let [CurrentQuiz, setCurrentQuiz] = useState(0);
  let [answers, setAnwser] = useState([]);
  const Quizes = useSelector((state) => state.Quiz.CurrentQuiz);
  const currentId = useSelector((state) => state.Quiz.currentId);
  const dispatch = useDispatch();
  // const {data = [], isLoading} = useGetKeysQuery()
  const percentage = Math.round((CurrentQuiz / Quizes.length) * 100);
  //! Функция которая контролирует нажатие на вариант ответа и переходит к следуюещму вопросу, записывает ответ в массив

  const HandlerAnswser = (key) => {
    setCurrentQuiz(CurrentQuiz + 1);
    setAnwser([...answers, key]);
  };

  //! Кнопка закрытия теста, появляетася после завершения
  const buttonExit = () => {
    dispatch(closeQuiz());
  };

  //! Функция которая подсчитывает количество правильных ответов и возвразщает количетсво
  //!правильных ответов по отношению к количеству вопросов

  //! Если срабатывает условие равности, выводит первый блок, в обратном случае второй
  return (
    <div>
      {answers.length === Quizes.length ? (
        <div className={s.Quiz}>
          <div className={s.progress}>
            <div style={{ width: `${percentage}%` }} className={s.progress__inner}></div>
            <div>
              <div>
                <ResultComponent userAnswers={answers} id={currentId} />
              </div>
              <button onClick={() => buttonExit()}>Выйти</button>
            </div>
          </div>
        </div>
      ) : (
        <div className={s.Quiz}>
          <div className={s.progress}>
            <div style={{ width: `${percentage}%` }} className={s.progress__inner}></div>
          </div>
          {console.log(Quizes)}
          <h2>{Quizes[CurrentQuiz].title}</h2>
          <ul>
            {Quizes[CurrentQuiz].Quize.map((e, index) => {
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
