export enum Difficulty {
    EASY = 'easy',
    HARD = 'hard'
}

export type QuestionType = 'boolean';

export interface Question {
    category: string,
    correct_answer: string,
    incorrect_answers: string[],
    question: string
}