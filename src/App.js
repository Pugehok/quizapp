import Modal from './Componenents/ModalContainer/Modal';
import { MainComponent } from "./Componenents/MainContenent/MainComponent";
import {Quiz} from "./Componenents/QuizContainer/Quiz";

import { useDispatch, useSelector } from 'react-redux';
function App() {

  const currentState = useSelector((state) => state.Quiz.CurrentQuiz);
  const isStartedQuiz = useSelector((state) => state.Quiz.isStartedQuiz);
  return (
    <div className="App">
      {!isStartedQuiz? (
      <> 
        <MainComponent />
         <Modal /> 
      </>)
      :
      <Quiz />
      } 
    </div>
  );
}

export default App;
