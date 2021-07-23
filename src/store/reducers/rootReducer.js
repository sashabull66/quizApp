import {combineReducers} from 'redux' // комбаин (сборщик) reducers
import quizReducer from './quiz' // reducer для QuizList и Quiz
import createReducer from './create' // reducer для QuizCreator

export default combineReducers({ // экспортирую клмбаин и ромещаю в него ссылки на все reducers
    quiz: quizReducer, // reducer для QuizList и Quiz
    create: createReducer // reducer для QuizCreator
})