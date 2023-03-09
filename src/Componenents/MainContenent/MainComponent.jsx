import s from './Component.module.scss';

export const MainComponent = () => {
  return (
    <section>
      <div className={s.Container}>
        <div className={s.Main__Wrapper}>
          <div className={s.Wrapper__quizCard}>
            <h2>Что такое реакт</h2>
            <img
              src="https://www.pinclipart.com/picdir/big/413-4132981_the-icon-depicts-three-circular-objects-orbiting-a.png"
              alt=""
            />
            <span>Вопросов: 15</span>
            <button>Приступить</button>
          </div>
        </div>
      </div>
    </section>
  );
};
