import {
    FETCH_NEWS_ERROR,
    FETCH_NEWS_REQUEST,
    FETCH_NEWS_SUCCESS,
    FETCH_SINGLE_NEWS_ERROR,
    FETCH_SINGLE_NEWS_REQUEST,
    FETCH_SINGLE_NEWS_SUCCESS,
    FETCH_COMMENTS_ERROR,
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
} from "./actionTypes";

const initialState = {
    news: [],
    error: null,
    singleNews: [],
    comments: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS_REQUEST:
            return {...state};
        case FETCH_NEWS_SUCCESS:
            return {...state, news: action.value};
        case FETCH_NEWS_ERROR:
            return {...state, error: action.value};
        case FETCH_SINGLE_NEWS_REQUEST:
            return {...state};
        case FETCH_SINGLE_NEWS_SUCCESS:
            return {...state, singleNews: action.value};
        case FETCH_SINGLE_NEWS_ERROR:
            return {...state, error: action.value};
        case FETCH_COMMENTS_REQUEST:
            return {...state};
        case FETCH_COMMENTS_SUCCESS:
            return {...state, comments: action.value};
        case FETCH_COMMENTS_ERROR:
            return {...state, error: action.value};
        default:
            return state;
    }
};

export default reducer;