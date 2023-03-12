import { useDispatch, useSelector } from 'react-redux';
import { closeQuiz } from '../../store/QuizSlice';
import React, { useState } from 'react';
import s from './quizComponent.module.scss';

export const Quiz = () => {
  let [CurrentQuiz, setCurrentQuiz] = useState(0);
  let [answers, setAnwser] = useState([]);
  const Quizes = useSelector((state) => state.Quiz.CurrentQuiz);
  const dispatch = useDispatch();
  const percentage = Math.round((CurrentQuiz / Quizes.length) * 100);
  console.log(Quizes);
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
  const Correct = () => {
    let counter = 0;
    const test = Quizes.map((e) => {
      return e.correct_answer;
    });
    for (let i = 0; i < test.length; i++) {
      if (test[i] === answers[i]) {
        counter++;
      }
    }

    return <h1> {`Правильных ответов: ${counter} / ${Quizes.length}`} </h1>;
  };

  //! Если срабатывает условие равности, выводит первый блок, в обратном случае второй
  return (
    <div>
    { 
      QuizArray[test]   ?(
      <div className={s.Quiz}>
        
      <div className={s.progress}>
        <div style={{ width: `${percentage}%`}} className={s.progress__inner}></div>
      </div>
      
      {test}
      <h2>{QuizArray[test].title}</h2>
      <ul>{Quizes}</ul>
    </div>
      ):(
        <div>{console.log("test prioden")}</div>
      )
    }
    </div>
  );
};
