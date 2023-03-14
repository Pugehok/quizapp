
import { combineReducers, configureStore, getDefaultMiddleware  } from "@reduxjs/toolkit";
import QuizSlice from "./QuizSlice";
import quizSlice from "./QuizSlice";


export const store = configureStore( {
    reducer:{
        Quiz: QuizSlice,
    },
})