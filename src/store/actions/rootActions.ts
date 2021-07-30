import { Dispatch } from 'redux';
import * as actionTypes from "./actionTypes";
import {questionsRepository} from "../../services/repo_service/QuestionsRepository";
import {Difficulty, Question, QuestionType} from "../../models/Question";


export const getQuestionsSuccess = (questions: Question[]) => {
    return {
        type: actionTypes.GET_QUESTIONS,
        questions
    } as const;
};

export const answerQuestionSuccess = (value: string, id: number) => {
    return {
        type: actionTypes.ANSWER_QUESTION,
        value: value,
        id: id
    } as const;
};

export const emptyQuestionSuccess = () => {
    return {
        type: actionTypes.EMPTY_QUESTIONS,
    } as const;
};

export const getQuestions = (amount: number, difficulty: Difficulty, type: QuestionType) => {
    return async (dispatch: Dispatch) => {
        const questions = await questionsRepository.getQuestions(amount, difficulty, type)
        dispatch(getQuestionsSuccess(questions))
    }
}

export const answerQuestion = (value: string, id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(answerQuestionSuccess(value, id))
    }
}

export const emptyQuestion = () => {
    return (dispatch: Dispatch) => {
        dispatch(emptyQuestionSuccess())
    }
}
export type RootActions = ReturnType<typeof getQuestionsSuccess> | ReturnType<typeof answerQuestionSuccess> | ReturnType<typeof emptyQuestionSuccess>;
