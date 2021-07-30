import * as actionTypes from '../actions/actionTypes';
import {Question} from "../../models/Question";
import {answerQuestionSuccess, RootActions} from "../actions/rootActions";
import {updatedObject} from "../utility";


export interface State {
    questions: Question[] | null;
    loading: boolean;
    error: null;
}

const initialState = {
    questions: null,
    loading: false,
    error: null
};

const answer = (state: State, action: ReturnType<typeof answerQuestionSuccess>) => {
    let questions = state.questions
    if (questions){
        questions[action.id].user_answer = action.value
    }
    return updatedObject(state,{
        questions: questions
    });
}

const rootReducer = (state: State = initialState, action: RootActions) => {
    switch (action.type){
        case actionTypes.GET_QUESTIONS:
            return {
                ...state,
                questions: action.questions
            };
        case actionTypes.ANSWER_QUESTION: return answer(state, action);
        case actionTypes.EMPTY_QUESTIONS:
            return {
                ...state,
                questions: null
            }
        default:
            return state;
    }
};

export default rootReducer;