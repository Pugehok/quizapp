import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import s from './quizComponent.module.scss';

export const Quiz = () => {
  // const Handle = (k) => {
  //   if (k === QuizArray[test].correct_answer) {
  //     if (test < QuizArray.length && QuizArray.length !== test) {
  //       setCorrect(correct + 1);
  //       setTest(test + 1);
  //     } else {
  //       setTest(0);
  //     }
  //   }
  // };
  // const Quizes = QuizArray[test].question.map((e, index) => {
  //   return (
  //     <li key={index} onClick={() => Handle(index)}>
  //       {e}
  //     </li>
  //   );
  // });
  // const percentage = Math.round((test / QuizArray.length) * 100);

  return (
    <div>
      <div className={s.Quiz}>
        <div className={s.progress}>
          {/* <div style={{ width: `${percentage}%` }} className={s.progress__inner}></div> */}
        </div>
        <h2>Привет</h2>
        <ul>
          <li key={1}> Тетст</li>
        </ul>
      </div>
    </div>
  );
};
