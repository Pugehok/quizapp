import s from './Component.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { openQuiz } from '../../store/QuizSlice';

export const MainComponent = () => {
  const Quizes = useSelector((state) => state.Quiz.QuizesState);
  const dispach = useDispatch();
  const elem = Quizes.map((e) => {
    return (
      <div className={s.Wrapper__quizCard}>
        <h2>{e.title}</h2>
        <img src={e.avatar} alt="#" />
        <span> Количество вопросов:{e.QuizState.length}</span>
        <button key={e.id} onClick={() => HandleClicker(e.id)}>
          Приступить
        </button>
      </div>
    );
  });

  const HandleClicker = (key) => {
    dispach(openQuiz(key));
  };

  return (
    <section>
      <div className={s.Container}>
        <div className={s.Main__Wrapper}>
          {Quizes.map((e) => {
            return (
              <div key={e.id} className={s.Wrapper__quizCard}>
                <h2>{e.title}</h2>
                <img src={e.avatar} alt="#" />
                <span> Количество вопросов:{e.QuizState.length}</span>
                <button key={e.id} onClick={() => HandleClicker(e.id)}>
                  Приступить
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
