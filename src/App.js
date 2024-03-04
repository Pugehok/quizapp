import Modal from './Componenents/ModalContainer/Modal';
import { MainComponent } from "./Componenents/MainContenent/MainComponent";
import {Quiz} from "./Componenents/QuizContainer/Quiz";
import { Header } from './Componenents/Header/HeaderComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getQuiz } from './store/QuizSlice';
function App() {
  const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getQuiz())
    },[])
  const currentState = useSelector((state) => state.Quiz.CurrentQuiz);
  const isStartedQuiz = useSelector((state) => state.Quiz.isStartedQuiz);
  return (
    <div className="App">
      {!isStartedQuiz? (
      <> 
      <Header />
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
