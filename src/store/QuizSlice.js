import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from '../axios/axios'

export const getQuiz = createAsyncThunk('get/quizes', async (params)  =>{
    const {data} = await axios.get('/quizes')
    return data
})


export const getKeys = createAsyncThunk('post/keys', async (params)  =>{
         const {data} = await axios.post(`/getkey/${params.id}`, params);
         return data;
})


const state = {
    currentResult: null,
    currentId: null,
    CurrentQuiz: null,
    QuizesState: null,
    isLoading: true,
    isStartedQuiz: false,
    // QuizesState: [{
    //     id:1,
    //     title: "React Quiz",
    //     description: "Простой тест на минимальные знания реакта",
    //     avatar : 'https://www.pinclipart.com/picdir/big/413-4132981_the-icon-depicts-three-circular-objects-orbiting-a.png',
    //     QuizState: [{
    //         title: 'Что такое Реакт?',
    //         questions: ['Библеотека', 'Фреймворк', 'Дима'],
    //         correct_answer: 1
    //     }, { 
    //         title: 'Какой язык используется в реакте',
    //         questions: ['JavaScript', 'C#', 'Ернест'],
    //         correct_answer: 0
    //     },{ 
    //             title: 'vopros 3',
    //             questions: ['JavaScript', 'C#', 'Ернест'],
    //             correct_answer: 0}]
    // }, {
    //     id:2,
    //     title: "C# quiz",
    //     description: "Простой тест на минимальные знания C#",
    //     avatar : 'https://w7.pngwing.com/pngs/686/952/png-transparent-computer-icons-c-software-development-others-text-rectangle-logo.png',
    //     QuizState: [{
    //         title: 'C# - это',
    //         questions: ['Язык программированния', 'Тест', '1'],
    //         correct_answer: 0
    //     }, { 
    //         title: 'Ты гнида',
    //         questions: ['Да', 'Нет', 'Да'],
    //         correct_answer: 1
    //     }
    //     ]

    // },
    // {
    //     id:3,
    //     title: "Насколько сильню я люблю Варю 🥰",
    //     description: "Тест для определения насколько я люблю Варю",
    //     avatar : 'https://sun9-67.userapi.com/impg/mmwKC_Fbs_vgqwvui7ygPKgRTKyWpUT0bQxWpQ/3d4jART8SnI.jpg?size=1215x2160&quality=95&sign=e86daec543f93e4d18a0edbc3a8bbcba&type=album',
    //     QuizState: [{
    //         title: 'Кто моя Варечка 💗',
    //         questions: ['Заечка', 'Лучик', 'Все ответы правильные'],
    //         correct_answer: 2
    //     }, { 
    //         title: 'Какая Варя сегодня 💗',
    //         questions: ['Хорошая', 'Злая', 'Хорошая и злая'],
    //         correct_answer: 2
    //     },{
    //         title: 'Как зовут Вариного парня💗',
    //         questions: ['Саша Рогоносцев', 'Чурка', 'Валя Гипопотамов', 'Димочка'],
    //         correct_answer: 3
    //     },{
            
    //         title: 'Кого любит Варя💗',
    //         questions: ['Саша Рогоносцев', 'Чурка', 'Валя Гипопотамов', 'Димочка'],
    //         correct_answer: 3
    //     }
    //     ]

    // }
        
    // ]

}

const quizSlice = createSlice({
    name:"QuizStore",
    initialState: state,
    reducers:{
        openQuiz: (state, action) => {
            state.CurrentQuiz = state.QuizesState.find((e)=> 
                e.id == action.payload
            )
        },
        closeQuiz: (state) =>{
            state.isStartedQuiz = false;
            state.CurrentQuiz = null;
            state.currentResult = null;
        },
        startQuiz: (state, action) =>{
            state.currentId =state.CurrentQuiz.id
            state.isStartedQuiz = true;
            state.CurrentQuiz = state.CurrentQuiz.Quizes
        }
    },
    extraReducers: {
        [getQuiz.pending]: (state)=>{
            state.QuizesState = null;
            state.isLoading = true;
        },
        [getQuiz.fulfilled]: (state, payloads)=>{
            state.QuizesState = payloads.payload;
            state.isLoading = false;
        },
        [getQuiz.rejected]: (state)=>{
            state.QuizesState = null;
            state.isLoading = 'error';
        },
        [getKeys.pending]: (state)=>{
            state.currentResult = null;
            state.isLoading = true;
        },
        [getKeys.rejected]: (state)=>{
            state.currentResult = null;
            state.isLoading = 'error';
        },
        [getKeys.fulfilled]: (state, payloads)=>{
            state.currentResult = payloads.payload.res;
            state.isLoading = false;
        },
    
    }
})


export default quizSlice.reducer

export const  {openQuiz, closeQuiz, startQuiz} = quizSlice.actions