import {getQuestionsApi} from "../api_service/ApiService";
import {Difficulty, Question, QuestionType} from "../../models/Question";
import { decodeHTML } from "../utils";

class QuestionsRepository {

    getQuestions = async (amount: number, difficulty: Difficulty, type: QuestionType): Promise<Question[]> => {
        const response = await getQuestionsApi({ amount: amount.toString(10), difficulty, type });
        return response.results.map(question => ({
            category: question.category,
            correct_answer: question.correct_answer,
            incorrect_answers: question.incorrect_answers,
            question: decodeHTML(question.question),
            user_answer: null
        }));
    }
}

const questionsRepository = new QuestionsRepository();

export { questionsRepository };
