import {QuestionDTO} from "../../models/QuestionDTO";

interface APIQuestionResponse {
    response_code: number;
    results: QuestionDTO[];
}

export async function getQuestionsApi(params: { [k:string]: string }): Promise<APIQuestionResponse> {
    const url = new URL('https://opentdb.com/api.php');
    const searchParams = url.searchParams;
    for (const [key, value] of Object.entries(params)) {
        searchParams.set(key, value);
    }
    const response = await fetch(url.toString());
    return await response.json();
}