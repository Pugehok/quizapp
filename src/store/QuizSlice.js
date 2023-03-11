import { createSlice } from "@reduxjs/toolkit";


const state = {
    CurrentQuiz: null,
    isStartedQuiz: false,
    QuizesState: [{
        id:1,
        title: "React Quiz",
        description: "Простой тест на минимальные знания реакта",
        avatar : 'https://www.pinclipart.com/picdir/big/413-4132981_the-icon-depicts-three-circular-objects-orbiting-a.png',
        QuizState: [{
            title: 'Что такое Реакт?',
            questions: ['Библеотека', 'Фреймворк', 'Дима'],
            correct_answer: 1
        }, { 
            title: 'Какой язык используется в реакте',
            questions: ['JavaScript', 'C#', 'Ернест'],
            correct_answer: 0
        },{ 
                title: 'vopros 3',
                questions: ['JavaScript', 'C#', 'Ернест'],
                correct_answer: 0}
    ]
    }, {
        id:2,
        title: "C# quiz",
        description: "Простой тест на минимальные знания C#",
        avatar : 'https://w7.pngwing.com/pngs/686/952/png-transparent-computer-icons-c-software-development-others-text-rectangle-logo.png',
        QuizState: [{
            title: 'C# - это',
            questions: ['Язык программированния', 'Тест', '1'],
            correct_answer: 0
        }, { 
            title: 'Ты гнида',
            questions: ['Да', 'Нет', 'Да'],
            correct_answer: 1
        }
        
        ]

    }
        
    ]

}

const quizSlice = createSlice({
    name:"QuizStore",
    initialState: state,
    reducers:{
        openQuiz: (state, action) => {
            state.CurrentQuiz = state.QuizesState.find((e)=> e.id === action.payload )
        },
        closeQuiz: (state) =>{
            state.CurrentQuiz = null;
        },
        startQuiz: (state, action) =>{
            state.isStartedQuiz = true;
            state.CurrentQuiz = state.CurrentQuiz.QuizState
        }

    }
})


export default quizSlice.reducer

export const  {openQuiz, closeQuiz, startQuiz} = quizSlice.actions