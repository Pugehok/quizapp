import Modal from './Componenents/ModalContainer/Modal';
import { MainComponent } from "./Componenents/MainContenent/MainComponent";
import {Quiz} from "./Componenents/QuizContainer/Quiz";

import { useDispatch, useSelector } from 'react-redux';
function App() {

  const currentState = useSelector((state) => state.Quiz.CurrentQuiz);
  return (
    <div className="App">
      {currentState && currentState.id? (
      <div> 
        <MainComponent />
         <Modal /> 
      </div> 
      ): <MainComponent />   } 
      
    </div>
  );
}

export default App;
