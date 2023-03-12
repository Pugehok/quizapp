import { useDispatch, useSelector } from 'react-redux';
import { closeQuiz, startQuiz } from '../../store/QuizSlice';
import './ModalComponent.scss';

function Modal() {
  const active = useSelector((state) => state.Quiz.CurrentQuiz);

  const dispach = useDispatch();
  const Handler = () => {
    dispach(closeQuiz());
  };

  const startOnQuiz = (k) => {
    dispach(startQuiz(k));
  };

  return (
    <div>
      {active ? (
        <div className="overlay">
          <div className="modal">
            <svg onClick={() => Handler()} height="200" viewBox="0 0 200 200" width="200">
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            <h3>{active.title}</h3>
            <div className="modal__text">
              <span>{active.description}</span>
            </div>
            <button className="modal__quiz" onClick={() => startOnQuiz(active.id)}>
              Start quiz
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Modal;
