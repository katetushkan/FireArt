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

export const getQuestions = (amount: number, difficulty: Difficulty, type: QuestionType) => {
    return async (dispatch: Dispatch) => {
        const questions = await questionsRepository.getQuestions(amount, difficulty, type)
        dispatch(getQuestionsSuccess(questions))
    }
}

export type RootActions = ReturnType<typeof getQuestionsSuccess>;
