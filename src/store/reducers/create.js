import {CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION} from "../actions/actionTypes";

const initialState = { // стартовый state
    quiz: [],
}

export default function createReducer(state = initialState, action) { // создаю reducer для QuizCreator
    switch (action.type) {
        case CREATE_QUIZ_QUESTION :
            return {
                ...state,
                quiz: [...state.quiz, action.item]
            }
        case RESET_QUIZ_CREATION:
            return {
                ...state, quiz: [],
            }
        default:
            return state // если не будет совпадений по action.type
    }
}