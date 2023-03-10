import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import s from './quizComponent.module.scss';

export const Quiz = () => {
  let [test, setTest] = useState(0);
  let [ended, setEnded] = useState(false);
  const QuizArray = useSelector((state) => state.Quiz.QuizesState[0].QuizState).map((e) => {
    return {
      title: e.title,
      question: e.questions,
      correct_answer: e.correct_answer,
    };
  });

  const Handle = (k) => {
    if (k === QuizArray[test].correct_answer) {
      if (QuizArray.length - 1 !== test) {
        setTest(test + 1);
      } else {
        setTest(0);
      }
    } else {
      console.log('Вы ответили неправильно');
    }
  };

  const Quizes = QuizArray[test].question.map((e, index) => {
    return (
      <li key={index} onClick={() => Handle(index)}>
        {e}
      </li>
    );
  });

  return (
    <div className={s.Quiz}>
      <div className={s.Quiz__Progresbar}></div>
      {test}
      <h2>{QuizArray[test].title}</h2>
      <ul>{Quizes}</ul>
    </div>
  );
};
