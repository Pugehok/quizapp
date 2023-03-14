import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getKeys } from '../../store/QuizSlice';
export const ResultComponent = (props) => {
  const arrayResult = useSelector((state) => state.Quiz.currentResult);
  const prop = {
    id: props.id,
    userAnswers: props.userAnswers,
  };
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('test');
    dispatch(getKeys(prop));
  }, []);

  const QuizEnded = (arr) => {
    return arr.map((e, index) => {
      if (e) {
        return <h1 key={index}>Вы правильно ответили на вопрос номер {index + 1}</h1>;
      } else {
        return <h1 key={index}>Вы неправильно ответили на вопрос номер {index + 1}</h1>;
      }
    });
  };

  return <div>{arrayResult ? <div>{QuizEnded(arrayResult)}</div> : <h1>Boobs</h1>}</div>;
};
