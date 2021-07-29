import * as actionTypes from '../actions/actionTypes';
import {Question} from "../../models/Question";
import {RootActions} from "../actions/rootActions";


interface State {
    questions: Question[] | null;
    loading: boolean;
    error: null;
}

const initialState = {
    questions: null,
    loading: false,
    error: null
};

const rootReducer = (state: State = initialState, action: RootActions) => {
    switch (action.type){
        case actionTypes.GET_QUESTIONS:
            return {
                ...state,
                questions: action.questions
            };
        default:
            return state;
    }
};

export default rootReducer;