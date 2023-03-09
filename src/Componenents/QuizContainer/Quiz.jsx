import { useDispatch, useSelector } from 'react-redux';

import s from './quizComponent.module.scss';
export const Quiz = () => {
    const QuizArray = useSelector((state) => state.Quiz.QuizesState).map((e) =>{
     return e.QuizState
        
    })
    console.log(QuizArray);
  return (
    <div className={s.Quiz}>
     <div className={s.Quiz__Progresbar}>
     </div>
     <h2>{QuizArray[0].title}</h2>
        <ul>
            {/* {
                e.question.map((text) =>
                (<li key={text}>{text}</li> ))
                } */}
        </ul>
    </div>
  );
}

