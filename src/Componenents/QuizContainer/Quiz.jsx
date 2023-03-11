import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import s from './quizComponent.module.scss';

export const Quiz = () => {
  const Quizes = useSelector((state) => state.Quiz.CurrentQuiz);
  console.log(Quizes);

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
