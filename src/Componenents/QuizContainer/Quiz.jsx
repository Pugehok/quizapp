import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import s from './quizComponent.module.scss';

export const Quiz = () => {
  const [test, setTest] = useState(0);
  const [correct, setCorrect] = useState(1);
  const [ended, setEnded] = useState(false);
  const QuizArray = useSelector((state) => state.Quiz.QuizesState[0].QuizState).map((e) => {
    return {
      title: e.title,
      question: e.questions,
      correct_answer: e.correct_answer,
    };
  });

  const Handle = (k) => {
    if (k === QuizArray[test].correct_answer) {
      console.log(correct)
      setCorrect(correct + 1)
        setTest(test + 1);
    } else {
      setTest(test + 1)
    }
  };

  const Quizes = QuizArray[test].question.map((e, index) => {
    return (
      <li key={index} onClick={() => Handle(index)}>
        {e}
      </li>
    );
  });
  const percentage = Math.round((test/QuizArray.length)*100)
  

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
